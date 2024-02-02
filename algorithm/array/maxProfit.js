let arr = [7,1,5,3,6,4] 

// function maxProfit(arr) {
//     let LEN = arr.length
//     if (arr.length > 1) {
//         let min = arr[0]
//         let res = 0
//         for (let i = 1; i < LEN;i++) {
//             if (arr[i] > min) {
//                 res = Math.max(res, arr[i] - min)
//             } else {
//                 min = arr[i]
//             }
//         }
//         console.log('res', res)
//     } else {
//         console.log(0)
//     }
// }
// maxProfit(arr)


function maxProfit2(arr) {
    let LEN = arr.length
    if (arr.length > 1) {
        let res = 0
        for (let i = 0; i < LEN - 2; i++) {
            let crt = arr[i]
            let nxt = arr[i+1]
            if (nxt - crt > 0) {
                res += nxt - crt
            }
        }
        console.log(res)
    } else {
        console.log(0)
    } 
}
maxProfit2(arr)