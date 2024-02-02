// 第一个字符串的排列之一是第二个字符串的子串
let s1 = 'ab'
let s2 = 'eidbaooo'

var checkInclusion = function(s1, s2) {
    let len = s1.length; // 固定窗口长度
    let sort1 = s1.split("").sort().toString(); // 排序
    for (let right = 0; right <= s2.length - len; right++) {
        let subStr = s2.substr(right, len); // s1窗口滑过的s2部分
        if (sort1 === subStr.split("").sort().toString()) {
        // 比较窗口与s2该部分是否对应
            return true;
        }
    }
    return false;
};
