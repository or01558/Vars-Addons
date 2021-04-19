"use strict";
const fs = require("fs");
class Addons {
	static #list = {};

	static initFiles() {
		const files = fs.readdirSync("./libs/");
		files.forEach((file) => {
			const fileName = file.split(".")[0];
			const addon = require(`./libs/${fileName}`);
			Addons.#list[fileName] = addon;
		});
	}

	static config() {
		Addons.initFiles();
		const list = Addons.#list;
		Object.keys(list).forEach((item) => {
			try {
				const addon = list[item];
				const dataType = addon.type();
				if (typeof dataType == -1) global[item] = list[item];
				else {
					const functions = Object.getOwnPropertyNames(addon).filter(
						(func) =>
							func !== "length" &&
							func !== "constructor" &&
							func !== "name" &&
							func !== "prototype"
					);
					for (const func of functions) {
						dataType.prototype[func] = addon[func];
					}
				}
			} catch (err) {}
		});
	}
}

module.exports = Addons;
