// let arr = [1,2,3,4,5,6]
// let arr = [1,null,2,3,4,null,null,5,6]
let arr = [2,3,9,10,7,8,6,5,4,11,1]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function BFS(root) {
    if (!root) {
        return root
    }
    let arr = [root]
    while(arr.length > 0) {
        let item = arr.shift()
        if (!item.left || !item.right) {
            return item
        }
        if (item.left && typeof item.left.val === 'number') {
            arr.push(item.left)
        }
        if (item.right && typeof item.right.val === 'number') {
            arr.push(item.right)
        }
    }
}

function array2Tree(arr) {
    let root = null
    while(arr.length > 0) {
        let current = arr.shift()
        if (!root) {
            root = new TreeNode(current)
        } else {
            let node = BFS(root)
            if (!node.left) {
                node.left = new TreeNode(current)
            } else if (!node.right) {
                node.right = new TreeNode(current)
            }
        }
    }
    return root
}
let tree = array2Tree(arr)
// console.log('tree', tree)
let sum = 0
function DFS(root, cb) {
    cb(root)
    if (root.left) {
        DFS(root.left, cb)
    }
    if (root.right) {
        DFS(root.right, cb)
    }
}
DFS(tree, (node) => {
    if (node) {
        sum += node.val
    }
})
console.log(sum)

function getAllNodes(root) {
    let nodes = []
    DFS(root, (node) => {
        nodes.push(node)
    })
    let max = sum
    for (let node of nodes) {
        let subSum = 0
        DFS(node, (nd) => {
            if (nd) {
                subSum += nd.val
            }
        })
        max = Math.max(max, (sum - subSum) * subSum)
    }
    console.log('max', max)
}
getAllNodes(tree)