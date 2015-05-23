var fs = require('fs')
var path_to_file = process.argv[2]
var readCallback = function(err, data) {
    console.log(data.toString().split("\n").length - 1)
}
var strs = fs.readFile(path_to_file, readCallback)
