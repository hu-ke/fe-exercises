let arr = [1, 2, 3]

function merge(arr, ele) {
    let LEN = arr.length
    let res = []
    for (let i = 0; i <= LEN; i++) {
        let newArr = [...arr]
        newArr.splice(i, 0, ele)
        res.push(newArr)
    }
    return res
}

function allSubsets(arr) {
    if (arr.length === 1) {
        return [arr]
    } 
    // else if (arr.length === 2) {
    //     return merge([arr[0]], arr[1])
    // }

    let LEN = arr.length
    let res = []
    allSubsets(arr.slice(0, LEN-1)).forEach(sub => {
       res.push(...merge(sub, arr[LEN - 1]))
    })
    return res
}

console.log(allSubsets(arr))