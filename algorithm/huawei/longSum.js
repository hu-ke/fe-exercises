let str1 = '9876543210'
let str2 = '1234567890'

function sum(str1, str2) {
    let LEN1 = str1.length
    let LEN2 = str2.length
    if (LEN1 !== LEN2) {
        if (LEN1 < LEN2) {
            let count = LEN2 - LEN1
            while(count > 0) {
                str1 = '0' + str1
                count--
            }
        } else {
            let count = LEN1 - LEN2
            while(count > 0) {
                str2 = '0' + str2
                count--
            }
        }
    }

    LEN1 = str1.length
    LEN2 = str2.length
    let res = ''
    let lend = false
    for (let i = LEN1-1; i >= 0; i--) {
        let tempSum = parseInt(str1[i]) + parseInt(str2[i])
        if (lend) {
            tempSum = tempSum + 1
        }
        res = tempSum % 10 + res
        lend = tempSum >= 10
    }

    if (lend) {
        res = '1' + res
    }
    console.log(res)
}

// 11111111100
// 1111111100
sum(str1, str2)