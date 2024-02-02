
function addFn() {
    console.log('add')
}

function subFn() {
    console.log('subFn')
}

function getFn() {
    let count = 0
    return function() {
        count++
        return count
    }
}
module.exports = {
    add: addFn,
    substract: subFn,
    getFn: getFn
}

console.log('abc')