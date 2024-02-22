// https://www.nowcoder.com/practice/2c81f88ecd5a4cc395b5308a99afbbec?tpId=37&tqId=21315&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

let str = 'a8a72a6a5yy98y65ee1r2'

console.log(str.split(/[^0-9]+/g))

function longestNum(str) {
    let regexp = /\d+/g
    let result = [...str.matchAll(regexp)]
    let nums = result.map(r => {
        return r[0]
    })
    
    let maxLen = 0
    nums.forEach(num => {
        maxLen = Math.max(num.length, maxLen)
    })
    
    let arr = nums.filter(num => {
        return num.length === maxLen
    })

    console.log(arr.join('') + ',' + maxLen)
}

longestNum(str)