
/**
 * Adds new strings functions
 * @name Strings
 */
class Strings {
    /**
     * Capitalize the first letter in each word
     * @param {string} s String to capitalize
     */
    static capitalize(s = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        let array = s.split(" ");
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].replace(array[i][0], this.Upper(array[i][0].toString()));
        }
        s = "";
        array.forEach(item => s += item == array[0] ? item : " " + item);
        return s;
    }
    
    /**
     * Changes the letters in the string to upper case
     * @param {string} s String to upper case
     */
    static Upper(s = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        return s.toUpperCase();
    }
    /**
       * Changes the letters in the string to lower case
       * @param {string} s String to lower case
       */
    static Lower(s = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        return s.toLowerCase();
    }
    /**
   * Checks if specific char exists in the string 
   * If the char exists this will return true
   * else this will return false
   * @param {string} s String to search inside him
   */
    static find(s = null, char = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (char == null) throw new Error("Missing Char Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        if (typeof char !== "string") throw new Error("The First Argument Must be a string");
        if (char.length > 1) throw new Error("I need char, Not String");
        for (let i = 0; i < s.length; i++) {
            if (s[i] === char) return true;
        }
        return false;
    }
    /**
   * Returns how much times the char exists in the string
   * @param {string} s String to search inside him
   * @param {string} char Char to find
   */
    static countChar(s = null, char = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (char == null) throw new Error("Missing Char Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        if (typeof char !== "string") throw new Error("The First Argument Must be a string");
        if (char.length > 1) throw new Error("I need char, Not String");
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === char) count++;
        }
        return count;
    }
    /**
 * Checks if specific text exists in the string 
 * If the text exists this will return his index
 * else this will return false  
 * @param {string} s String to search inside him
 * @param {string} text text to find
 */
    static getIndex(s = null, text = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (text == null) throw new Error("Missing Char Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        if (typeof text !== "string") throw new Error("The First Argument Must be a string");
        if (!s.includes(text)) return null;
        else {
            let startsFrom = s.indexOf(text);
            let index = { beginAt: startsFrom, endAt: 0 };
            for (let i = startsFrom; i < s.length; i++) {
                if (s[i] == text[text.length - 1] && i !== startsFrom) {
                    index.endAt = i;
                    break;
                }
            }
            return index;
        }
    }
    /**
   * Deletes specific text from the string
   * @param {string} s String delete from
   * @param {string} text text to delete
   */
    static delete(s = null, text = null) {
        if (s == null) throw new Error("Missing String Argument");
        if (text == null) throw new Error("Missing Char Argument");
        if (typeof s !== "string") throw new Error("The First Argument Must be a string");
        if (typeof text !== "string") throw new Error("The First Argument Must be a string");
        if (!s.includes(text)) return s;
        else {
            return s.split(text).join("");
        }
    }

}

module.exports = Strings;