/**
 * Adds new Objects Funtions
 * @name Objects
 */
class Objects {
	/**
	 * Loop over the object, from the first key to the last key
	 * @param {(key:string) => void} callback The Callback for each key
	 */
	static loop(callback = null) {
		if (!callback) throw new Error("Missing Callback Argument");
		if (typeof callback !== "function")
			throw new Error("The Callback Argument must be a function");
		const keys = Object.keys(this);
		for (let i = 0; i < keys.length; i++) {
			callback(keys[i]);
		}
	}
	/**
	 * Loop over the object, from the last key to the first key
	 * @param {(key:string) => void} callback The Callback for each key
	 */
	static endLoop(callback = null) {
		if (!callback) throw new Error("Missing Callback Argument");
		if (typeof callback !== "function")
			throw new Error("The Callback Argument must be a function");
		const keys = Object.keys(this);
		for (let i = keys.length - 1; i >= 0; i--) {
			callback(keys[i]);
		}
	}
	/**
	 *
	 * @returns {String | Random | Object | Number | Array}
	 */
	static type() {
		return Object;
	}
}

module.exports = Objects;
