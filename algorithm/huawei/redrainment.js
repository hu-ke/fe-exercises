
let str = '73 58 213 78 255 231 165 52 51 288 93 177 61 270 116 '

function redrainment(arr) {
    console.log(arr)
    let LEN = arr.length
    let dp = (new Array(LEN)).fill(1)
    for (let i = 1; i < LEN; i++) {
        for (let j = 0; j < i; j++) {
            if (parseInt(arr[i]) > parseInt(arr[j])) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }
    console.log(Math.max.apply(null, dp))
}
redrainment(str.split(' ').filter(n => !isNaN(parseInt(n))))