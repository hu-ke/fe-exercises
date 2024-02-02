const c = require("./c.js");

const fn = () => {
    c.incCount()
    c.incCount()
}

module.exports = {
    fn: fn,
}