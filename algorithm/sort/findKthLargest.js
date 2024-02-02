// https://leetcode-cn.com/problems/kth-largest-element-in-an-array
/**
数组中的第K个最大元素

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) { // 自己写的
    let LEN = nums.length
    let partitionIndex = partition(nums, 0, LEN - 1)
    if (k === LEN - partitionIndex) {
        return nums[partitionIndex]
    } else if (k > LEN - partitionIndex) { // 落在左边
        return findKthLargest(nums.slice(0, partitionIndex), k - (LEN - partitionIndex))
    } else { // 落在右边
        return findKthLargest(nums.slice(partitionIndex + 1, LEN), k)
    }
}
var partition = function(nums, startIndex, endIndex) {
    let pivotIndex = startIndex
    let pivot = nums[pivotIndex]
    let nextIndex = pivotIndex + 1
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, nextIndex)
            nextIndex++
        }
    }
    swap(nums, pivotIndex, nextIndex - 1)
    return nextIndex - 1
}
var swap = function(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
let nums = [3,2,7,1,2,4,5,5,6]
console.log('result>', findKthLargest(nums, 10))



// 快速排序，自己实现
// var quickSort = function(nums, startIndex, endIndex) {
//     if (startIndex < endIndex) {
//         let pivotIndex = partition(nums, startIndex, endIndex)
//         console.log('pi', pivotIndex)
//         quickSort(nums, startIndex, pivotIndex - 1)
//         quickSort(nums, pivotIndex + 1, endIndex)
//     }
// }
// var partition = function(nums, startIndex, endIndex) {
//     let pivotIndex = startIndex
//     let pivot = nums[pivotIndex]
//     let nextIndex = pivotIndex + 1
//     for (let i = pivotIndex + 1; i <= endIndex; i++) {
//         if (nums[i] < pivot) {
//             swap(nums, i, nextIndex)
//             nextIndex++
//         }
//     }
//     swap(nums, pivotIndex, nextIndex - 1)
//     return nextIndex - 1
// }
// var swap = function(nums, i, j) {
//     let temp = nums[i]
//     nums[i] = nums[j]
//     nums[j] = temp
// }
// let nums = [3,2,7,1,2,4,5,5,6]
// quickSort(nums, 0, nums.length - 1)
