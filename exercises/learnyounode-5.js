var fs = require('fs')
var path_to_dir = process.argv[2]
var expression = process.argv[3]
fs.readdir(path_to_dir, function (err, list) {
    list.forEach(function (filename) {
        if (!filename.match(new RegExp("\." + expression + '$', 'g')))
            return
        console.log(filename)
    })
})
