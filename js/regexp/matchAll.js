// 正则 => 匹配abc 全局查找，不区分大小写
const regex = /abc/gi;
 
// 字符串
const message = 'abc fAbcdaBc cabc 123';
 
/**
 * matchAll传入的正则修饰符必须加g，
 * 必须为全局查找，否则会报错
 */
// 返回的是迭代器
const res = message.matchAll(regex);
// console.log(res.next()); // {value: Array(1), done: false}
// console.log(res.next()); // {value: Array(1), done: false}
// console.log(res.next()); // {value: Array(1), done: false}
// console.log(res.next()); // {value: Array(1), done: false}
// console.log(res.next()); // {value: undefined, done: true}
// console.log(res.next()); // {value: undefined, done: true}
 
// 迭代器可以使用for...of循环
// for (const iterator of res) {
//   console.log(iterator);
// }
/**
 * ['abc', index: 0, input: 'abc fAbcdaBc cabc 123', groups: undefined]
 * ['Abc', index: 5, input: 'abc fAbcdaBc cabc 123', groups: undefined]
 * ['aBc', index: 9, input: 'abc fAbcdaBc cabc 123', groups: undefined]
 * ['abc', index: 14, input: 'abc fAbcdaBc cabc 123', groups: undefined]
*/