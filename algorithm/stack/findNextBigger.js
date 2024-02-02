// 遇到的快手面试题
// 2. 算法题, 要求o(n)
// 以空间换时间
// 输入：[3,1,2,7,8,9,6]
// 输出：[7,2,7,8,9,-1,-1]
// 给定一个数字数组，找到数组每个值后面第一个大于的它自身的元素，如果没找到，设为-1。最后返回一个包含所有找到的值的新数组
// 示例
// 输入：[1, 5, 8, 7, 2, 9, 2]
// 输出：[5, 8, 9, 9, 9, -1, -1]
// 要求：O(n)
// 1. 栈为空，则当前索引i入栈；
// 2. 栈不为空，如果栈顶索引元素大于等于当前元素，则将当前索引i入栈；（目的是为了保持栈从栈底到栈顶非升序）
// 3. 栈不为空，当前元素大于栈顶索引元素，则栈顶索引元素对应的第一个比它大的元素就是当前元素，保存当前元素；同时为了保证栈底到栈顶非升序需要将栈顶元素弹出，直到满足1、2条件。

// 单调栈法
// 首先我们进行抽象思考：我们将数组的元素看成站立在一排的人，元素大小就是人的身高，问题就抽象为每个人能看到第一个比自己高的人的身高，没有比自己高的人话，就是-1。
// https://blog.csdn.net/m0_52600696/article/details/120982880?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-120982880-blog-95392648.235%5Ev39%5Epc_relevant_3m_sort_dl_base4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-120982880-blog-95392648.235%5Ev39%5Epc_relevant_3m_sort_dl_base4&utm_relevant_index=2
// [1,5,8,7,2,9,2]
function findNextBigger(arr) {
    let LEN = arr.length
    let res = []
    let stack = []
    for (let i = LEN - 1; i >= 0; i--) {
        while(stack.length !== 0 && arr[i] > stack[0]) {
            console.log('stack', JSON.parse(JSON.stringify(stack)))
            stack.shift()
        }
        if (stack.length === 0) {
            res.unshift(-1)
        } else {
            res.unshift(stack[0])
        }
        stack.unshift(arr[i])
    }
    return res
}
console.log(findNextBigger([3,1,2,7,8,9,6]))
