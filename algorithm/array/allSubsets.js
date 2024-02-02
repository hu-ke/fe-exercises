// 3、求数组所有子集
// 示例1：[1]-->[1]
// 示例2：[1,2]--> [1] 、[2]、[1,2]
// 示例3：[1,2,3]-->[1] 、[2]、[1,2]、[3]、[1,2,3]、[1,3]、[2,3]

let arr = [1, 2, 3]

function allSubsets(arr) {
    let LEN = arr.length
    let res = []
    for (let i = 1; i < 1 << LEN; i++) {
        let temp = []
        for (let j = 0; j < LEN; j++) {
            if (i & 1 << j) {
                temp.push(arr[j])
            }
        }
        res.push(temp)
    }
    console.log(res)
}
allSubsets(arr)


// 方法1（自己写的）:
// function merge(arrs, item) {
//     let res = [[item]]
//     arrs.forEach(arr => {
//         res.push(arr)
//     })
//     arrs.forEach(arr => {
//         let arrCopy = [...arr]
//         arrCopy.push(item)
//         res.push(arrCopy)
//     })
//     return res
// }
// function allSubsets(arr) {
//     if (arr.length === 1) {
//         return [arr]
//     } 
//     let LEN = arr.length
//     return merge(allSubsets(arr.slice(0, LEN-1)), arr[LEN-1])
// }
// console.log(allSubsets([1, 2, 3, 4, 5]))

// 方法2（自己写的）:
// function getBinaryArr(n) {
//     let nums = Math.pow(2, n)
//     let res = []
//     while(nums > 0) {
//         let binStr = nums.toString(2)
//         while (binStr.length < n) {
//             binStr = '0' + binStr
//         }
//         res.push(binStr)
//         nums--
//     }
//     res.shift()
//     return res
// }
// let arr = [1, 2, 3, 4]
// function allSubsets(arr) {
//     let LEN = arr.length
//     let binaryArr = getBinaryArr(LEN)
//     let res = []
//     binaryArr.forEach(binStr => {
//         let tempArr = []
//         for (let i = 0; i < LEN; i++) {
//             if (binStr[i] === '1') {
//                 tempArr.push(arr[i])
//             }
//         }
//         res.push(tempArr)
//     })
//     return res
// }
// console.log(allSubsets(arr))

// 方法3:其实和方法2思路差不多
// const subsets = function(nums) {
//     let res = [], len = nums.length;
//     for (let i = 1; i < (1 << len); i++) {
// 		let arr = [];
//         for (let j = 0; j < len; j++) {
//             if (i & (1 << j)) arr.push(nums[j]);
//         }
//         res.push(arr);
//     }
//     return res;
// };
// console.log(subsets([1,2,3]))