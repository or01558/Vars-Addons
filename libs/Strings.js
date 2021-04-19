/**
 * Adds new strings functions
 * @name Strings
 */
class Strings {
	/**
	 * Capitalize the first letter in each word
	 */
	static capitalize() {
		const array = [];
		let str = "";
		for (let i = 0; i < this.length; i++) {
			if (i == 0 || (this[i - 1] === " " && this[i] !== " "))
				array[i] = this[i].Upper();
			else array[i] = this[i];
		}
		array.forEach((item) => (str += item));
		return str;
	}

	/**
	 * Changes the letters in the string to upper case
	 */
	static Upper() {
		return this.toUpperCase();
	}
	/**
	 * Changes the letters in the string to lower case
	 */
	static Lower() {
		return this.toLowerCase();
	}
	/**
	 * Checks if specific char exists in the string
	 * If the char exists this will return true
	 * else this will return false
	 * @param {string} char char to find
	 */
	static find(char = null) {
		if (char == null) throw new Error("Missing Char Argument");
		if (typeof char !== "string")
			throw new Error("The First Argument Must be a string");
		if (char.length > 1) throw new Error("I need char, Not String");
		for (let i = 0; i < this.length; i++) {
			if (this[i] === char) return true;
		}
		return false;
	}
	/**
	 * Returns how much times the char exists in the string
	 * @param {string} char Char to find
	 */
	static countChar(char = null) {
		if (char == null) throw new Error("Missing Char Argument");
		if (typeof char !== "string")
			throw new Error("The First Argument Must be a string");
		if (char.length > 1) throw new Error("I need char, Not String");
		let count = 0;
		for (let i = 0; i < this.length; i++) {
			if (this[i] === char) count++;
		}
		return count;
	}
	/**
	 * Checks if specific text exists in the string
	 * If the text exists this will return his index
	 * else this will return false
	 * @param {string} text text to find
	 */
	static getIndex(text = null) {
		if (text == null) throw new Error("Missing Char Argument");
		if (typeof text !== "string")
			throw new Error("The First Argument Must be a string");
		if (!this.includes(text)) return -1;
		else {
			let startsFrom = this.indexOf(text);
			let index = { beginAt: startsFrom, endAt: 0 };
			for (let i = startsFrom; i < this.length; i++) {
				if (this[i] == text[text.length - 1] && i !== startsFrom) {
					index.endAt = i;
					break;
				}
			}
			return index;
		}
	}
	/**
	 * Deletes specific text from the string
	 * @param {string} text text to delete
	 */
	static delete(text = null) {
		if (text == null) throw new Error("Missing Char Argument");
		if (typeof text !== "string")
			throw new Error("The First Argument Must be a string");
		if (!this.includes(text)) return this;
		else {
			return this.split(text).join("");
		}
	}

	static type() {
		return String;
	}
}

module.exports = Strings;
