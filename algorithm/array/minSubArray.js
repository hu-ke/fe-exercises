// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和≥ s的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

// 示例:

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
function minSubArrayLen(target, nums) {
    let LEN = nums.length
    let res = []
    for (let i = 0; i < LEN; i++) {
        let temp = [nums[i]]
        if (nums[i] >= target) {
            return temp
        }
        for (let j = i + 1; j < LEN; j++) {
            temp.push(nums[j])
            if (sumOfArray(temp) >= target) {
                res.push(temp)
                break
            }
        }
    }
    return res
}

function sumOfArray(arr) {
    return arr.reduce((s, i) => s+i, 0)
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))