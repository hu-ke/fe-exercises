let weights = [1,3,4] // kg
let values = [15,20,30] // $
let bagWeight = 10 // kg
// https://blog.csdn.net/mabaizi/article/details/128945437

function bagProblem(weights, values, bagWeight) {
    let LEN = weights.length
    let dp = (new Array(LEN)).fill([])
    for (let i = 0; i < bagWeight + 1; i++) {
        if (i < weights[0]) {
            dp[0][i] = 0
        } else {
            dp[0][i] = parseInt(dp[0][i - weights[0]]) + values[0]
        }
    }
    // 先遍历物品
    for (let i = 1; i < weights.length; i++) {
        for (let j = 0; j <= bagWeight; j++) {
            if (j < weights[i]) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weights[i]] + values[i])
            }
        }
    }

    // 先遍历背包
    // for (let j = 0; j < bagWeight + 1; j++) {
    //     for (let i = 1; i < weights.length; i++) {
    //          if (j < weights[i]) {
    //             dp[i][j] = dp[i-1][j]
    //         } else {
    //             dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weights[i]] + values[i])
    //         }
    //     }
    // }
    console.log(dp)
}

// function bagProblem(weights, values, bagWeight) {
//     let map = {}
//     for (let i = 0; i < weights.length; i++) {
//         map[weights[i]] = values[i]
//     }

//     let LEN = bagWeight + 1
//     let dp = (new Array(LEN)).fill(Infinity)
//     dp[0] = 0
//     for(let i = 1; i < LEN; i++) {
//         let smallWeights = weights.filter(w => w <= i)
//         if (smallWeights.length > 0) {
//             let res = 0
//             for (let smallWeight of smallWeights) {
//                 if (dp[i - smallWeight] < Infinity) {
//                     res = Math.max(res, dp[i - smallWeight] + map[smallWeight])
//                 }
//             }
//             dp[i] = res
//         }
//     }
//     return dp[dp.length - 1]
// }
console.log(bagProblem(weights, values, bagWeight))
