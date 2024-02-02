
// let arr = [1,2,3]

// var permuteUnique = function(nums) {
//     const LEN = nums.length;
//     if (LEN == 1) {
//         return [nums];
//     }
//     nums.sort((a,b)=>(a-b));// 为了和答案一样有规律
//     let resList = new Set();// 使用 set 去重
//     function fullPermute(alreadyList = [], waitList = []) {
//         if (alreadyList.length === LEN) {
//             resList.add(alreadyList); // 防重复
//         } else {
//             for (let i = 0; i < waitList.length; i++) {
//                 let wi = waitList[i];
//                 let newAlreadyList = alreadyList.concat(wi); // newAlreadyList = [...alreadyList, wi];
//                 let newWaitList = waitList.filter(  (val,index) => (index != i) );
//                 fullPermute(newAlreadyList, newWaitList);
//             }
//         }
//     }
//     fullPermute([], nums);
    
//     return [...resList]
// };

// console.log(permuteUnique(arr))