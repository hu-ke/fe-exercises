let str = 'abcabcbb'
function lengthOfLongestSubstring(s) {
    let LEN = s.length
    let res = []
    for (let i = 0; i < LEN; i++) {
        let map = {}
        map[str[i]] = 1
        for (let j = i+1; j < LEN; j++) {
            if (!map[str[j]]) {
                map[str[j]] = 1
            } else {
                res.push(str.slice(i, j))
                break;
            }
        }
    }
}
lengthOfLongestSubstring(str)