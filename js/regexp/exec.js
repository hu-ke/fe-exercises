// 正则 => 匹配abc 全局查找，不区分大小写
const regex = /abc/ig;
 
// 字符串
const message = 'abc fAbcdaBc cabc 123';
 
const res = regex.exec(message);
console.log(res);

// const res = message.match(regex)
// console.log(res);

/**
 * 每次执行，会返回找到的第一个
 * 再执行一次，会在原来基础上继续查找 => 前提是加上了全局查找修饰符g，否则永远找到第一个
 */
 
// // ['abc', index: 0, input: 'abc fAbcdaBc cabc 123', groups: undefined]
// console.log(regex.exec(message));
// // ['Abc', index: 5, input: 'abc fAbcdaBc cabc 123', groups: undefined]
// console.log(regex.exec(message));
// // ['aBc', index: 9, input: 'abc fAbcdaBc cabc 123', groups: undefined]
// console.log(regex.exec(message));
// // ['abc', index: 14, input: 'abc fAbcdaBc cabc 123', groups: undefined]
// console.log(regex.exec(message));
// // null
// console.log(regex.exec(message));