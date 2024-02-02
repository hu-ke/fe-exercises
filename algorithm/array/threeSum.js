// https://leetcode-cn.com/problems/3sum
/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 
提示：
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let LEN = nums.length
    // [-1,0,1,2,-1,-4]
    nums.sort((a, b) => a-b)
    // [-4, -1, -1, 0, 1, 2]
    let res = []
    for (let i = 0; i < LEN; i++) {
        for (let j = i + 1; j < LEN;j++) {
            for (let k = j + 1; k < LEN; k++) {
                res.push([nums[i], nums[j], nums[k]])
            }
        }
    }
    res = res.filter(arr => {
        return arr[0] + arr[1] + arr[2] === 0
    })
    console.log('res>>', res)
}
threeSum([-1,0,1,2,-1,-4])

//  优化
var threeSum = function (nums) {
    if (nums.length < 3) {
        return [];
    }
    let list = [];
    nums.sort((a, b) => a - b); //先排好序
    //console.log("nums:", nums);

    for (let i = 0; i < nums.length; i++) {
        //相同就跳过这一次循环，因为已经结果过一次了
        if (nums[i] === nums[i - 1]) {
        continue;
        }
        let left = i + 1;
        let right = nums.length - 1; //最后一位，指针从0开始，所有减1

        while (left < right) {
        if (nums[left] + nums[right] + nums[i] === 0) {
            //命中
            list.push([nums[left], nums[right], nums[i]]);
            //准备继续找
            while (nums[left] === nums[left + 1]) {
            //这里是避免相同的值，直接跳过
            left++;
            }
            while (nums[right] === nums[right - 1]) {
            //这里是避免相同的值，直接跳过
            right--;
            }
            //继续找
            left++;
            right--;
        } else if (nums[left] + nums[right] + nums[i] > 0) {
            //数字大了需要，右指针向左前进1
            right--;
        } else {
            //数字小了，需要左指针向右前进1
            left++;
        }
        }
    }
    return list;
};