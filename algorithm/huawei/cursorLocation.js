// https://www.nowcoder.com/practice/eaf5b886bd6645dd9cfb5406f3753e15?tpId=37&tqId=21287&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

// let arr = (new Array(parseInt(10))).fill(0).map((item, index) => {
//     return index+1
// })

let arr = [1,2,3]
function select(arr, directions) {
    let LEN = directions.length
    let startIndex = 0
    let endIndex = 3
    let cursorIndex = 0
    for (let i = 0; i < LEN; i++) {
        if (directions[i] === 'U') {
            if (cursorIndex === 0) {
                cursorIndex = arr.length - 1
                startIndex = arr.length - 1 - 3
                endIndex = arr.length - 1
            } else {
                cursorIndex--
                if (cursorIndex < startIndex) {
                    startIndex -= 1
                    endIndex -= 1
                }
            }
        } else {
            if (cursorIndex === arr.length - 1) {
                cursorIndex = 0
                startIndex = 0
                endIndex = 3
            } else {
                cursorIndex++
                if (cursorIndex > endIndex) {
                    startIndex++
                    endIndex++
                }
            }
        }
    }

    let temp = arr.slice(startIndex, endIndex+1)
    console.log(temp.join(' '))
    console.log(arr[cursorIndex])
}
select(arr, 'UUUU')