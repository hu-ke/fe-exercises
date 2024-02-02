// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

// let i = 0
// while(i < 100000) {
//     i++
//     // console.log(i)
// }