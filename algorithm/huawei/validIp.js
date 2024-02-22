// https://www.nowcoder.com/practice/995b8a548827494699dc38c3e2a54ee9?tpId=37&tqId=21313&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

let str = '+1.2.3.8'

console.log(/^\d+$/.test('123'))

function validIp(str) {
    let arr = str.split('.')
    if (arr.length !== 4) {
        return 'NO'
    }
    for (let num of arr) {
        console.log(num)
        if (!(/^\d+$/.test(num))) {
            return 'NO'
        }
        if (num.length === 0) {
            return 'NO'
        } else if (num.length > 1 && num[0] === '0') {
            return 'NO'
        }
        if (isNaN(num)) {
            return 'NO'
        }
        if (num > 255 || num < 0) {
            return 'NO'
        }
    }
    return 'YES'
}
console.log(validIp(str))