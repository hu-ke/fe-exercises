
// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
/**
字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 
限制：
1 <= s 的长度 <= 8
*/
/**
 * @param {string} s
 * @return {string[]}
 */
// s = 'abcd'
var permutation = function(s) {
    const LEN = s.length;
    if (LEN <= 1) {
        return [s];
    }
    let list = s.split('');
    let res = new Set(); // 尽量优先使用 set，其性能远高于数组！！！
    // let res = [];
    function fullPermutation(str = '', waitList = []) {
        if (str.length === LEN) {
            res.add(str)
        }
        for (let i=0;i<waitList.length;i++) {
            let c = waitList[i]
            let newWaitList = waitList.filter((w, j) => j !== i)
            fullPermutation(str+c, newWaitList)
        }
    }
    fullPermutation('', list);
    return [...res];
};
console.log(permutation('abcd'))