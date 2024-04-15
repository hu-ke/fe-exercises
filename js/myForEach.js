

Array.prototype.myForEach = function(cb, context) {
    let LEN = this.length
    for(let i = 0; i < LEN; i++) {
        cb.call(context, this[i], i)
    }
}

let arr = [1,2,3]

arr.myForEach(function(crt, index) {
    console.log(crt, index, this)
}, {
    a: 111
})