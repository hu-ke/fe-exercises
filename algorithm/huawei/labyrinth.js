
// let arr = [
//     [0,1,0,0,0], 
//     [0,1,1,1,0],
//     [0,0,0,0,0],
//     [0,1,1,1,0],
//     [0,0,0,1,0]
// ]
// let arr = [
//     [0,1,0,0,0],
//     [0,1,0,1,0],
//     [0,0,0,0,1],
//     [0,1,1,1,0],
//     [0,0,0,0,0]
// ]
let arr = [
    [0,1,0,0,0],
    [0,1,0,1,0],
    [0,0,0,1,0],
    [1,1,1,1,0],
    [0,0,0,0,0]
]

function labyrinth(arr) {
    let res = []
    function walk(i, j) {
        if (i < 0 || j < 0 || i > 4 || j > 4 || arr[i][j] === 1) {
            return
        }
        arr[i][j] = 1
        res.push([i, j])
        if (i === 4 && j === 4) {
            console.log('res>>', res)
        } else { // arr[i][j] === 0
            console.log('res.', res)
            walk(i, j+1) // 右
            walk(i+1, j) // 下
            walk(i-1,j) // 上
            walk(i, j-1) // 左

            arr[i][j] = 0
            res.pop()
        }
    }
    walk(0, 0)
}

labyrinth(arr)