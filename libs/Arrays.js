class Arrays {
	/**
	 * Loop with for loop over the array, from the first index to the last index
	 * @param {(i:number) => void} callback The Callback for each index
	 */
	static ForLoop(callback) {
		if (!callback) throw new Error("Missing Callback Argument");
		if (typeof callback !== "function")
			throw new Error("The Callback Argument must be a function");
		for (let i = 0; i < this.length; i++) {
			callback(i);
		}
	}
	/**
	 * Loop with for loop over the array, from the last index to the first index
	 * @param {(i:number) => void} callback The Callback for each index
	 */
	static EndForLoop(callback) {
		if (!callback) throw new Error("Missing Callback Argument");
		if (typeof callback !== "function")
			throw new Error("The Callback Argument must be a function");
		for (let i = this.length - 1; i >= 0; i--) {
			callback(i);
		}
	}
	/**
	 * Loop with foreach loop over the array, from the first value to the  last value
	 * @param {(item) => void} callback The Callback for each value
	 */
	static forEachLoop(callback) {
		if (!callback) throw new Error("Missing Callback Argument");
		if (typeof callback !== "function")
			throw new Error("The Callback Argument must be a function");
		this.forEach((item) => callback(item));
	}

	/**
	 *
	 * @returns {String | Random | Object | Number | Array}
	 */
	static type() {
		return Array;
	}
}

module.exports = Arrays;
