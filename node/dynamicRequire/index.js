

let a = 0
let fn = null
if (a) {
   fn = require('./utils').add
} else {
    fn = require('./utils').substract
}

fn = require('./utils').getFn

let xx = fn()
xx()
xx()
console.log(xx())