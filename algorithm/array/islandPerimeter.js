// https://leetcode.cn/problems/island-perimeter/description/

let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
function islandPerimeter(grid) {
    let LEN = grid.length
    let sum = 0
    for (let i = 0; i < LEN; i++) {
        let LEN2 = grid[i].length
        for (let j = 0; j < LEN2; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || j === 0) {
                    sum += 4
                } else {
                    sum += 4
                    if (grid[i][j - 1] === 1) {
                        sum -= 2
                    }
                    if (grid[i - 1][j] === 1) {
                        sum -= 2
                    }
                }
            }
        }
    }
    console.log('sum', sum)
}

// 官方
// var islandPerimeter = function (grid) {
//     const dx = [0, 1, 0, -1];
//     const dy = [1, 0, -1, 0];
//     const n = grid.length, m = grid[0].length;
//     let ans = 0;
//     for (let i = 0; i < n; ++i) {
//         for (let j = 0; j < m; ++j) {
//             if (grid[i][j]) {
//                 let cnt = 0;
//                 for (let k = 0; k < 4; ++k) {
//                     let tx = i + dx[k];
//                     let ty = j + dy[k];
//                     if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
//                         cnt += 1;
//                     }
//                 }
//                 ans += cnt;
//             }
//         }
//     }
//     console.log(ans)
//     return ans;
// };

islandPerimeter(grid)