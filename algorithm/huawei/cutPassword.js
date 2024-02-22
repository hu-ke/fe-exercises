// https://www.nowcoder.com/practice/3cd4621963e8454594f00199f4536bb1?tpId=37&tqId=21255&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=


let str = '12HHHHA'

function isP(str) {
    if (str) {
        let LEN = str.length
        for (let i = 0; i < LEN / 2; i++) {
            if (str[i] !== str[LEN - i - 1]) {
                return false
            }
        }
        return true
    }
    return false
}

function getValid(str) {
    let LEN = str.length
    let res = []
    for (let i = 0; i < LEN; i++) {
        for (let j = i + 1; j < LEN; j++) {
            if (isP(str.slice(i, j+1))) {
                res.push(str.slice(i, j+1))
            }
        }
    }
    let maxStr = ''
    res.forEach(r => {
        if (r.length > maxStr.length) {
            maxStr = r
        }
    })
    console.log(maxStr)
}

getValid(str)