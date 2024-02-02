let weights = [2,4,5] // kg
let values = [15,20,30] // $
let bagWeight =  10 // kg

function bagProblem(weights, values, bagWeight) {
    let map = {}
    for (let i = 0; i < weights.length; i++) {
        map[weights[i]] = values[i]
    }

    let LEN = bagWeight + 1
    let dp = (new Array(LEN)).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i < LEN; i++) {
        let smallWeights = weights.filter(w => w <= i)
        if (smallWeights.length > 0) {
            let res = 0
            for (let smallWeight of smallWeights) {
                if (dp[i - smallWeight] < Infinity) {
                    res = Math.max(res, dp[i - smallWeight] + map[smallWeight])
                }
            }
            dp[i] = res
        }
    }
    return dp[dp.length - 1]
}
console.log(bagProblem(weights, values, bagWeight))