var person = {
    name: 'hk',
    age: 30,
    hobbies: ['fish', 'games'],
    others: {
        a: 1,
        b: 2
    }
}
var number = 10

function increNumber() {
    number += 1
}

function getNumber() {
    return number
}

exports.increNumber = increNumber
exports.getNumber = getNumber
exports.number = number
exports.person = person

// module.exports = {
//     number: number,
//     person: person
// }