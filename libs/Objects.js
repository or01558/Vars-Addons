/**
 * Adds new Objects Funtions
 * @name Objects
 */
class Objects {
    /**
     * Loop over the object, from the first key to the last key
     * @param {object} object The Object for the loop
     * @param {function} callback The Callback for each key
     */
    static loop(object = null, callback = null) {
        if (object == null) throw new Error("Missing Object Argument");
        if (typeof object !== "object") throw new Error("The First Argument must be an object");
        if (callback == null) throw new Error("Missing Callback Argument");
        if (typeof callback !== "function") throw new Error("The Callback Argument must be a function");
        for (const key in object) {
            callback(object, key);
        }
    }
    /**
     * Loop over the object, from the last key to the first key
     * @param {object} object The Object for the loop
     * @param {function} callback The Callback for each key
     */
    static endLoop(object = null, callback = null) {
        if (object == null) throw new Error("Missing Object Argument");
        if (typeof object !== "object") throw new Error("The First Argument must be an object");
        if (callback == null) throw new Error("Missing Callback Argument");
        if (typeof callback !== "function") throw new Error("The Callback Argument must be a function");
        const keys = Object.keys(object);
        for (let i = keys.length - 1; i >= 0; i--) {
            callback(object, keys[i]);
        }
    }
}

module.exports = Objects;