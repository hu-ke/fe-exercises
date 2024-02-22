// https://www.nowcoder.com/practice/5190a1db6f4f4ddb92fd9c365c944584?tpId=37&tqId=21249&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=
let str = 'A Famous Saying: Much Ado About Nothing (2012/8).'
// let str = 'By?e'
// let str = 'nNg'

function isGreater(c1, c2) {
    return c1.toLowerCase() > c2.toLowerCase()
}

function isLetter(c) {
    return /[a-zA-Z]/.test(c)
}


function sortStr(str) {
    let LEN = str.length
    let letters = str.split('').filter(c => isLetter(c))
    letters.sort((a, b) => {
        if (a.toLowerCase() === b.toLowerCase()) {
            return 0
        } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1
        }
        return -1
    })
    console.log(letters.length, LEN)
    let res = ''
    for (let i = 0, j = 0; i < LEN; i++) {
        if (isLetter(str[i])) {
            res = res + letters[j]
            j++
        } else {
            res = res + str[i]
        }
    }
    console.log(res)
}
sortStr(str)

// console.log(isGreater('y', 'c'))
// console.log(isLetter('Z'))
// console.log(swap(str, 1, 3))
// console.log(change('nNogn',3))

// 默写冒泡排序？