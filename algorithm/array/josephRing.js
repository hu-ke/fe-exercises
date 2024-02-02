
// let arr = [0,1,2,3,4,5]
// [0, 1, 3, 4, 5]
// [0, 1, 3, 4]
// [0, 1, 4]
// [0, 4]
// 自己写的
function josephRing(n, m) {
    let outNums = 0
    let intArr = (new Array(n)).fill(1) // [1, 1, 1, 1, 1, 1]
    let i = 0
    while(outNums < n - 1) {
        let count = 0
        for (; ; i++) {
            if (intArr[i % n] === 1) {
                count++
            }
            if (count === m) {
                intArr[i % n] = 0
                outNums++
                console.log('intArr', intArr)
                break;
            }
        }
        
    }
    return intArr.findIndex(i => i === 1)
}

// function josephRing(n, m) {
//     //当参数不满足条件时，这个游戏无法进行
//     if(n<=1 || m<1) {
//         console.log("you can't play Joseph's game. n must be bigger than 1, m must be bigger than 0");
//         return;
//     }

//     let arr = new Array(n); //长度为n的数组，位置从0——n-1，就代表了 n 个人的编号
//     let count = 0; //纪录出圈人数
//     let num = 0; //报数器
//     for(let i=0;i<arr.length;i++) { //将数组所有元素设定为 1
//         arr[i] = 1;
//     }

//     //设定循环结束条件：当 count = n-1 时，游戏结束
//     while(count < n-1) {
//         for(let i=0;i<arr.length;i++) { //第二层循环，循环数组
//             if(arr[i] === 1) { //当这个位置的元素为 1 时，就执行接下来的代码
//                 num++; //每经过一个元素为 1 的位置时，就让报数器加 1
//                 if(num === m) { //当报数器等于 m 时，就执行接下来的代码
//                     arr[i] = 0; //让这个位置的元素为 0，表示这个位置已经出圈了
//                     count++; //纪录出圈人数的变量加 1
//                     num = 0; //将报数器清零
//                 }
//                 //当 m = 1 时，只有当 count = n 才会退出第二层循环（for循环），此时数组内的所有元素都变为了 0，为了避免这个问题，必须要有这个 if 判断句，达到特定条件时强制退出
//                 //其实当 m = 1时，结果就是 n，也可以将 m = 1 作为特殊情况来处理，即写在 while 循环以外，如此 m = 1 时就不会进入循环
//                 if(count === n-1) {
//                     break
//                 }
//             }
//         }
//     }
//     //循环数组，找到元素为 1 的位置，将这个位置输出
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] === 1) {
//             console.log(i + ' is the winner');
//         }
//     }
// }
josephRing(6,7)
 