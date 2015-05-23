var fs = require('fs')
var path_to_file = process.argv[2]
var strs = fs.readFileSync(path_to_file).toString()
console.log(strs.split("\n").length - 1)
