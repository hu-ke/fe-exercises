const intervals = [[1,3], [2,6], [8,10], [15,18]]
// output: [[1,6],[8,10], [15,18]]

function mergeIntervals(intervals) {
    intervals.sort((arr1, arr2) => {
        return arr1[0] - arr2[0]
    })
    let res = []
    if (intervals.length <= 1) {
        return intervals
    }
    let LEN = intervals.length
    res.push(intervals[0])
    for (let i = 1; i < LEN;i++) {
        let top = res[res.length - 1]
        if (intervals[i][0] > top[1]) {
            res.push(intervals[i])
        } else {
            top[1] = Math.max(intervals[i][1], top[1]);
        }
    }
    console.log(res)
}
mergeIntervals(intervals)

