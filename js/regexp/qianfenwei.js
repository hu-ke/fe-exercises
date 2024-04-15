// 定义正则: 对.转义
// const re = /\./gi;
// const message = 'index.html';
 
// console.log(message.match(re)); // .

// 1987654321 =》 1, 987，654，321
let number = '1987654321'
let regexp = /(\d)(?=((\d{3})+$))/g
console.log(number.match(regexp))