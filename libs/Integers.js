
/**
 * Adds new integers functions
 * @name Strings
 */
class Integers {
    /**
     * Returns The length of specific number
     * @param {number} num The Number
     */
    static len(num = null) {
        if (!num) throw new Error("Missing Integer Argument");
        if (num.toString().includes('.') || typeof num !== "number") throw new Error("The First Argument must be a integer");
        let len = 0;
        while (num != 0) {
            num = parseInt(num / 10);
            len++;
        }
        return len;
    }

    /**
      * Returns how much times specific unit exists in the number
      * @param {number} num The Number
      * @param {number} unit The unit to count
      */
    static countDigit(num = null, unit = null) {
        if (!num) throw new Error("Missing Integer Argument");
        if (num.toString().includes('.') || typeof num !== "number") throw new Error("The First Argument must be a integer");
        if (!unit) throw new Error("Missing Unit Argument");
        if (unit.toString().includes('.') || typeof unit !== "number") throw new Error("The Second Argument must be a integer");
        let count = 0;
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
      * @param {number} num The Number
      * @param {number} unit The unit to search
      */
    static isExists(num = null, unit = null) {
        if (!num) throw new Error("Missing Integer Argument");
        if (num.toString().includes('.') || typeof num !== "number") throw new Error("The First Argument must be a integer");
        if (!unit) throw new Error("Missing Unit Argument");
        if (unit.toString().includes('.') || typeof unit !== "number") throw new Error("The Second Argument must be a integer");
        while (num != 0) {
            if (num % 10 !== unit) return false;
            num = parseInt(num / 10);
        }
        return true;
    }
    /**
        * Deletes specific unit from the number
      * @param {number} num The Number
      * @param {number} unit The unit to delete
        */
    static deleteUnit(num = null, unit = null) {
        if (!num) throw new Error("Missing Integer Argument");
        if (num.toString().includes('.') || typeof num !== "number") throw new Error("The First Argument must be a integer");
        if (!unit) throw new Error("Missing Unit Argument");
        if (unit.toString().includes('.') || typeof unit !== "number") throw new Error("The Second Argument must be a integer");
        const s = num.toString().replace(unit.toString(), "");
        return isNaN(parseInt(s)) ? 0 : parseInt(s);
    }
    /**
            * Replace specific unit in the number
            * @param {number} num The Number
            * @param {number} unit The unit for the replacement
            * @param {number} replacement The replacement
            */
    static replaceUnit(num, unit, replacement) {
        if (!num) throw new Error("Missing Integer Argument");
        if (num.toString().includes('.') || typeof num !== "number") throw new Error("The First Argument must be a integer");
        if (!unit) throw new Error("Missing Unit Argument");
        if (unit.toString().includes('.') || typeof unit !== "number") throw new Error("The Second Argument must be a integer");
        if (!replacement) throw new Error("Missing Replacement Argument");
        if (replacement.toString().includes('.') || typeof replacement !== "number") throw new Error("Args3 must be a integer");
        const s = num.toString().replace(unit.toString(), replacement.toString()[0]);
        return parseInt(s);
    }
}

module.exports = Integers;

