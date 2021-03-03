const Strings = require("./libs/Strings");
const Integers = require("./libs/Integers");
const Random = require("./libs/Random");
const Objects = require("./libs/Objects");
const Arrays = require("./libs/Arrays");
class Addons {
    constructor() {
        this.Strings = Strings;
        this.Integers = Integers;
        this.Random = Random;
        this.Objects = Objects;
        this.Arrays = Arrays;
    }
}

module.exports = new Addons();