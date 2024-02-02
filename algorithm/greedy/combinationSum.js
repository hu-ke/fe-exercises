
// coinChange也可以用此法求解
// https://leetcode-cn.com/problems/combination-sum
/**
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

提示：
1 <= candidates.length <= 30
1 <= candidates[i] <= 200
candidate 中的每个元素都是独一无二的。
1 <= target <= 500
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let candidates = [2,3,6,7]
let target = 7
var combinationSum = function(candidates, target) {
  let res = new Set();
  function permute(alreadyList = [], waitList = []) {
    let total = alreadyList.reduce((sum, crt) => sum + crt, 0)
    console.log('alreadyList', alreadyList)
    if (total === target) {
      res.add(alreadyList)
    } else if (total < target) {
      for(let i = 0; i < waitList.length; i++) {
        let isExceed = permute(alreadyList.concat(waitList[i]), waitList)
        if (isExceed) {
          break
        }
      }
    } else {
      return true // 是否超出exceed
    }
  }
  permute([], candidates);
  // console.log([...res])
  return [...res]
}
console.log(combinationSum(candidates, target))