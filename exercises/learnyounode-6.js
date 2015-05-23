ex6 = require('./learnyounode-6-module.js')
ex6(process.argv[2], process.argv[3], function (err, list) {
    list.forEach(function(name) {
        console.log(name)
    })
})
