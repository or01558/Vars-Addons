/**
 * Adds new integers functions
 * @name Strings
 */
class Integers {
	/**
	 * Returns The length of the number
	 */
	static len() {
		if (this.toString().includes("."))
			throw new Error("The number must be an integer!");
		let len = 0;
		let num = this;
		while (num != 0) {
			num = parseInt(num / 10);
			len++;
		}
		return len;
	}

	/**
	 * Returns how much times specific unit exists in the number
	 * @param {number} unit The unit to count
	 */
	static countDigit(unit = null) {
		if (this.toString().includes("."))
			throw new Error("The number must be an integer!");
		if (unit == null) throw new Error("Missing Unit Argument");
		if (unit.toString().includes(".") || typeof unit !== "number")
			throw new Error("The unit must be a integer");
		let count = 0;
		let num = this;
		while (num != 0) {
			if (num % 10 == unit) count++;
			num = parseInt(num / 10);
		}
		return count;
	}

	/**
	 * Checking if specific unit exists in the number
	 * If unit found this will return true
	 * else this will return false
	 * @param {number} unit The unit to search
	 */
	static isExists(unit = null) {
		if (this.toString().includes("."))
			throw new Error("The number must be an integer!");
		if (unit == null) throw new Error("Missing Unit Argument");
		if (unit.toString().includes(".") || typeof unit !== "number")
			throw new Error("The unit must be a integer");
		let num = this;
		while (num != 0) {
			if (num % 10 == unit) return true;
			num = parseInt(num / 10);
		}
		return false;
	}
	/**
	 * Deletes specific unit from the number
	 * @param {number} unit The unit to delete
	 */
	static deleteUnit(unit = null) {
		if (this.toString().includes("."))
			throw new Error("The number must be an integer!");
		if (unit == null) throw new Error("Missing Unit Argument");
		if (unit.toString().includes(".") || typeof unit !== "number")
			throw new Error("The unit must be a integer");
		const s = this.toString().replace(unit.toString(), "");
		return isNaN(parseInt(s)) ? 0 : parseInt(s);
	}
	/**
	 * Replace specific unit in the number
	 * @param {number} unit The unit for the replacement
	 * @param {number} replacement The replacement
	 */
	static replaceUnit(unit = null, replacement = null) {
		if (this.toString().includes("."))
			throw new Error("The number must be an integer!");
		if (unit == null) throw new Error("Missing Unit Argument");
		if (unit.toString().includes(".") || typeof unit !== "number")
			throw new Error("The unit must be a integer");
		if (replacement == null) throw new Error("Missing Replacement Argument");
		if (
			replacement.toString().includes(".") ||
			typeof replacement !== "number"
		)
			throw new Error("The replacement must be a integer");
		const s = this.toString().replace(
			unit.toString(),
			replacement.toString()[0]
		);
		return parseInt(s);
	}
	/**
	 *
	 * @returns {String | Random | Object | Number | Array}
	 */
	static type() {
		return Number;
	}
}

module.exports = Integers;
