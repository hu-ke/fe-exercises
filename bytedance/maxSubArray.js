
let nums = [-2,1,-3,4,-1,2,1,-5,4]

// 动态规划
function maxSubArray(nums) {
    if (nums.length === 1) {
        return nums
    }
    let LEN = nums.length
    let dp = [nums[0]]
    let max = nums[0]
    for (let i = 1; i < LEN; i++) {
        if (dp[i - 1] < 0) {
            dp[i] = nums[i]
        } else {
            dp[i] = dp[i - 1] + nums[i]
            max = Math.max(dp[i], max)
        }
    }
    return max
}
console.log(maxSubArray(nums))

// 分治算法
// https://blog.csdn.net/ATFWUS/article/details/104877170