

// ex1.
// var counter = 3;
// function incCounter() {
//   counter++;
// }
// module.exports = {
//   counter: counter,
//   incCounter: incCounter,
// };

// ex2.
// var counter = 3;
// function incCounter() {
//   counter++;
// }
// // mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
// module.exports = {
//   get counter() {
//     return counter
//   },
//   incCounter: incCounter,
// };

// ex3.
// var obj = {
//   a: {
//     b: 1
//   } 
// }
// function incCounter() {
//   obj.a.b++;
// }
// module.exports = {
//   obj: obj,
//   incCounter: incCounter,
// }