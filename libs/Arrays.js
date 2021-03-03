class Arrays {
      /**
     * Loop with for loop over the array, from the first index to the last index
     * @param {Array} array The Array for the loop
     * @param {function} callback The Callback for each index
     */
    static ForLoop(array, callback) {
        if (array == null) throw new Error("Missing Array Argument");
        if (!Array.isArray(array)) throw new Error("The First Argument must be an array");
        if (callback == null) throw new Error("Missing Callback Argument");
        if (typeof callback !== "function") throw new Error("The Callback Argument must be a function");
        for (let i = 0; i < array.length; i++) {
            callback(array, i);
        }
    }
   /**
     * Loop with for loop over the array, from the last index to the first index
     * @param {Array} array The Array for the loop
     * @param {function} callback The Callback for each index
     */
    static EndForLoop(array, callback) {
        if (array == null) throw new Error("Missing Array Argument");
        if (!Array.isArray(array)) throw new Error("The First Argument must be an array");
        if (callback == null) throw new Error("Missing Callback Argument");
        if (typeof callback !== "function") throw new Error("The Callback Argument must be a function");
        for (let i = array.length - 1; i >= 0; i--) {
            callback(array, i);
        }
    }
   /**
     * Loop with foreach loop over the array, from the first value to the  last value
     * @param {Array} array The Array for the loop
     * @param {function} callback The Callback for each value
     */
    static forEachLoop(array, callback) {
        if (array == null) throw new Error("Missing Array Argument");
        if (!Array.isArray(array)) throw new Error("The First Argument must be an array");
        if (callback == null) throw new Error("Missing Callback Argument");
        if (typeof callback !== "function") throw new Error("The Callback Argument must be a function");
        array.forEach(item => callback(array, item));
    }
}

module.exports = Arrays;