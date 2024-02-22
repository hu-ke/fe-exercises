// let str1 = 'abcdef'
// let str2 = 'aceghi'
// let str1 = 'abc'
// let str2 = 'bac'

let str1 = 'apple'
let str2 = 'oppa'

function levenshteinDistance(str1, str2) {
    str1 = ' ' + str1
    str2 = ' ' + str2
    let dp = (new Array(str1.length))
    let LEN1 = str1.length
    let LEN2 = str2.length
    for (let i = 0; i < LEN1; i++) {
        if (!dp[i]) {
            dp[i] = []
        }
        dp[i][0] = i
    }
    for (let j = 0; j < LEN2; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i < LEN1; i++) {
        for (let j = 1; j < LEN2; j++) {
            if (str1[i] === str2[j]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1] + 1, dp[i-1][j] + 1, dp[i][j-1] + 1)
            }
        }
    }
    return dp[LEN1-1][LEN2-1]
}


console.log(levenshteinDistance(str1, str2))