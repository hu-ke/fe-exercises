// 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。

// 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：2
// 解释：
// 只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

// 示例 2：

// 输入：nums = [1,10,2,9]
// 输出：16
//  

// 提示：

// n == nums.length
// 1 <= nums.length <= 10的5次方
// -10的9次方 <= nums[i] <= 10的9次方
// let nums = [1,2,3]
// let nums = [1,10,2,9]
let nums = [-1, 0, 1, 100]

function getSteps(nums, avg) {
    let steps = 0
    let LEN = nums.length
    for (let i = 0; i < LEN; i++) {
        steps += Math.abs(nums[i] - avg)
    }
    return steps
}

function minSteps(nums) {
    nums.sort()
    let sum = 0
    nums.forEach(num => {
        sum += num
    })
    let min = nums[0]
    let max = nums[nums.length - 1]
    let stepsList = []
    while(min <= max) {
        let avg = min
        stepsList.push(getSteps(nums, avg))
        min++
    }

    let res = Infinity
    stepsList.forEach(steps => {
        res = Math.min(steps, res)
    })
    console.log(res)
    return res
}
minSteps(nums)

var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length, ret = 0, x = nums[Math.floor(n / 2)];
    for (let i = 0; i < n; i++) {
        ret += Math.abs(nums[i] - x);
    }
    return ret;
};
console.log(minMoves2(nums))
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/solutions/1501230/zui-shao-yi-dong-ci-shu-shi-shu-zu-yuan-xt3r2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。