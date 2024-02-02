// 省份/岛屿数量
// let arr = [[1,1,0],[1,1,0],[0,0,1]]
let arr = [[1,0,0],[0,1,0],[0,0,1]]
function isConnected(arr) {
    let LEN1 = arr.length
    let sum = 0
    for (let i = 0; i < LEN1; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                sum += 1
                walk(arr, i, j)
            }
        }
    }
    console.log('sum>>', sum)
}

function walk(arr, i, j) {
    if (i < arr.length && j < arr[0].length && arr[i][j] === 1) {
        arr[i][j] = 0
        walk(arr, i+1, j)
        walk(arr, i, j+1)
    }
}

isConnected(arr)