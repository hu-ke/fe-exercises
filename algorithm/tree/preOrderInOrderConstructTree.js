
// Input: nums = [3,2,1,5,6,4], k = 2 Output: 5

// let nums = [3,2,3,1,2,4,5,5,6]
let key = 4
let nums = [3,2,1,5,6,4]

function quickSort(nums, startIndex, endIndex, key) {
    let pivot = nums[startIndex]
    let partition = startIndex
    for (let i = startIndex + 1; i <= endIndex - startIndex; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, partition)
            partition++
        }
    }

    return partition
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

let partition = quickSort(nums, 0, nums.length)
let leftLen = nums.slice(0, partition)
let rightLen = nums.slice(partition, nums.length - 1)




// function findKLargest(nums) {
//     nums.sort()
//     return nums[nums.length - key]
// }
// console.log(findKLargest(nums))



// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7]
// Example 2:
// Input: preorder = [-1], inorder = [-1] Output: [-1]
// Input: preorder = [5, 9, 12], inorder = [5, 12, 9]
// Input: preorder = [5, 8, 7, 9, 12], inorder = [7, 8, 5, 12, 9]

// 树节点的构造函数
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 主函数，构建树
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    
    // 递归构建树的辅助函数
    function build(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }
        
        // 前序遍历的第一个节点是根节点
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        
        // 在中序遍历中找到根节点的位置
        let rootIndex = inorder.indexOf(rootVal);
        let leftSize = rootIndex - inStart; // 左子树的节点数量
        
        // 递归构建左子树和右子树
        root.left = build(preStart + 1, preStart + leftSize, inStart, rootIndex - 1);
        root.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd);
        
        return root;
    }
    
    // 调用递归函数构建树
    return build(0, preorder.length - 1, 0, inorder.length - 1);
}

// 测试例子
const preorder1 = [3,9,20,15,7];
const inorder1 = [9,3,15,20,7];
console.log(buildTree(preorder1, inorder1)); // Output: [3,9,20,null,null,15,7]

const preorder2 = [-1];
const inorder2 = [-1];
console.log(buildTree(preorder2, inorder2)); // Output: [-1]
