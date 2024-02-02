// https://zhuanlan.zhihu.com/p/593449000


// let groups = [[1,-1,-1],[3,-2,0]]
// let nums = [1,-1,0,1,-1,-1,3,-2,0]

// let groups = [[10,-2],[1,2,3,4]]
// let nums = [1,2,3,4,10,-2]

// let groups = [[1,2,3],[3,4]]
// let nums = [7,7,1,2,3,4,7,7]

function getEndIndex(group, nums) {
    let LEN = nums.length
    let GROUP_LEN = group.length
    let j = 0
    let passed = 0
    for (let i = 0; i < GROUP_LEN; i++) {
        let current = group[i]
        for (; j < LEN; j++) {
            if (nums[j] === current) {
                passed++
                break;
            }
        }
    }
    if (passed === GROUP_LEN) {
        return j
    }
    return -1
}
function canChoose(groups, nums) {
    let nums2 = [...nums]
    for(let group of groups) {
        let endIndex = getEndIndex(group, nums2)
        nums2 = nums2.slice(endIndex + 1, nums2.length)
        if (endIndex === -1) {
            return false
        }
    }
    return true
}
console.log(canChoose(groups, nums))