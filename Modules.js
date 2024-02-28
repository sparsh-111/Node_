const names = require('./name')
const sayhi = require('./sayhi')
const data = require('./6')
sayhi("susan");
sayhi(names.john);
console.log(data)

module.exports = sayhi
// every file in node is module
