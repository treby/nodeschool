module.exports = function (path_to_dir, expression, callback) {
    var fs = require('fs')
    var path = require('path')

    fs.readdir(path_to_dir, function (err, list) {
        if (err) return callback(err)
        filelist = []
        list.forEach(function (filename) {
            if (path.extname(filename) !== '.' + expression) return
            filelist.push(filename)
        })

        return callback(null, filelist)
    })
}
