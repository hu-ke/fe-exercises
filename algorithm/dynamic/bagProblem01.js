let weights = [1,3,4] // kg
let values = [15,20,30] // $
let bagWeight = 10 // kg

function bagProblem(weights, values, bagWeight) {
    let LEN1 = weights.length
    let dp = []
    for(let i = 0; i < LEN1; i++) {
        for(let j = 0; j <= bagWeight;j++) {
            if (j === 0) {
                if (!dp[i]) {
                    dp[i] = []
                }
                dp[i][0] = 0
                continue
            } 
            if (i === 0) {
                dp[i][j] = j >= weights[0] ? values[0] : 0
                continue
            }
            // i和j都大于0

            if (j < weights[i]) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j - weights[i]] + values[i], dp[i-1][j])
            }
        }
    }
    console.log(dp)
}
console.log(bagProblem(weights, values, bagWeight))