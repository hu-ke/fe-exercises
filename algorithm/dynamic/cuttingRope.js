// https://leetcode-cn.com/problems/jian-sheng-zi-lcof
// https://leetcode-cn.com/problems/integer-break/
/**
剪绳子，整数拆分

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
提示：

2 <= n <= 58
*/
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n === 2) {
        return 1
    } else if (n === 3) {
        return 2
    }
    let map = {
        2: 1,
        3: 2,
        4: 4
    }
    if (n > 4) {
        let max = 4
        updateMap(map, n)
        // for (let key in map) {
        //     max = Math.max(max, (n - key) * map[key])
        // }
    }
    
}
//  var cuttingRope = function(n) {
//     let map = {
//         1: 0,
//         2: 1,
//         3: 2,
//         4: 4,
//         5: 6,
//         6: 9 
//     }
//     // n > 6
//     for (let i = 7; i <= n; i++) {
//         let max = 9
//         Object.keys(map).forEach(key => {
//             // console.log('map[key] * (n - key)', map[key] * (n - key))
//             max = Math.max(map[key] * (i - key), max)
//         })
//         map[i] = max
//     }
//     console.log(map[n+''])
// }
//  cuttingRope(12)