
// const dfs = (root, prevSum) => {
//     if (root === null) {
//         return 0;
//     }
//     const sum = prevSum * 10 + root.val;
//     if (root.left == null && root.right == null) {
//         return sum;
//     } else {
//         return dfs(root.left, sum) + dfs(root.right, sum);
//     }
// }
// var sumNumbers = function(root) {
//     return dfs(root, 0);
// };

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/sum-root-to-leaf-numbers/solutions/464666/qiu-gen-dao-xie-zi-jie-dian-shu-zi-zhi-he-by-leetc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


        function TreeNode(val, left, right) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }

        let root = {
            val: 4,
            left: {
                val: 9,
                left: {
                    val: 5
                },
                right: {
                    val: 1
                }
            },
            right: {
                val: 0
            }
        }

        function aa(root) {
            let paths = []
            function BFS(root, path) {
                path.push(root.val)
                if (root.left) {
                    BFS(root.left, path)
                } 
                if (root.right) {
                    BFS(root.right, path)
                }
                if (!root.left && !root.right) {
                    paths.push([...path])
                }
                path.pop()
            }
            BFS(root, [])
            console.log('paths', paths)
        }
        
        aa(root)