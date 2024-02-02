// https://leetcode-cn.com/problems/binary-search
/**
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

示例 1:
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
*/


let nums = [-1,0,3,5,9,12]
let target = 9
function search(nums, start, end, target) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
        return mid
    } else if (start === end && nums[start] !== target) {
        return -1
    } else if (nums[mid] > target) {
        return search(nums, start, mid, target)
    } else if (nums[mid] < target){
        return search(nums, mid + 1, end, target)
    } else {
        return -1
    }
}

console.log(search(nums, 0, nums.length - 1, target))

// 方法2:不用递归的二分
// public int search(int[] nums, int target) {
//     int left = 0, right = nums.length - 1;
//     while (left <= right) {
//         int mid = (right - left) / 2 + left;
//         int num = nums[mid];
//         if (num == target) {
//             return mid;
//         } else if (num > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/binary-search/solutions/980494/er-fen-cha-zhao-by-leetcode-solution-f0xw/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。