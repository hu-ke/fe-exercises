// 输入：
// 1000 5
// 800 2 0
// 400 5 1
// 300 5 1
// 400 3 0
// 500 2 0
// 输出：
// 2200

// let list = [
//    { cost: 800, value: 2, children: [ ] },
//    { cost: 400, value: 3, children: [] },
//    { cost: 500, value: 2, children: [] }
//  ]

// function maxHappiness(list, N) {
//    let dp = (new Array(N + 1)).fill(Infinity)
//    dp[0] = 0
//    for (let i = 1; i < N + 1; i++) {
//       let smallItems = list.filter(item => item.cost <= i)
//       let res = 0
//       for (let j = 0; j < smallItems.length; j++) {
//          let smallItem = smallItems[j]
//          if (dp[i - smallItem.cost] < Infinity) {
//             res = Math.max(res, dp[i - smallItem.cost] + smallItem.cost * smallItem.value)
//          }
//       }
//       dp[i] = res
//    }
//    console.log(dp[N])
// }
// maxHappiness(list, 801)
const items = [{
    cost: 10,
    value: 30,
}, {
    cost: 10,
    value: 20
}, {
    cost: 10,
    value: 10,
    children: [{
        cost: 20,
        value: 60
    }, {
        cost: 20,
        value: 60
    }]
}]

function bagProblem() {
    
}
bagProblem()
