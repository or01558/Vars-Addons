/**
 * Adds Random System
 * @name Random
 */
class Random {
	/**
	 * Generates random number between min and max
	 * The default min is one and the default max is ten
	 * @param {number} min The lowest number
	 * @param {number} max The highest number
	 */
	static generateNumber(min = 1, max = 10) {
		let rd = Math.floor(Math.random() * (max - min + 1)) + min;
		return rd;
	}
	/**
	 * Generates random char
	 */
	static generateChar() {
		let rd = Math.random().toString(36)[2];
		return rd;
	}
	/**
	 * Generates random string
	 */
	static genrateString() {
		let rd = Math.random().toString(36).split("0.").join("");
		return rd;
	}
	/**
	 * Adds random char to a specific string
	 * @param {string} s The string to add inside him
	 */
	static addRandomChar(s) {
		this.s += this.generateChar();
	}
	/**
	 * Adds random number to a specific string or specific number
	 * @param {string | number} num The string or the number to add inside him
	 * @param {boolean} isString says if the num is string or not
	 */
	static addRandomNumber(num = null) {
		if (!num) throw new Error("Missing Num Argument");
		if (typeof num === "string") {
			num += this.generateNumber();
			return num;
		} else if (typeof num === "number") {
			let s = num.toString();
			s += this.generateNumber();
			return parseInt(s);
		} else throw new Error("The First Argument must be a string or a number");
	}
	/**
	 *
	 * @returns {String | Random | Object | Number | Array}
	 */
	static type() {
		return -1;
	}
}

module.exports = Random;
