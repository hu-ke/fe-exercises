// let nums = [0,3,7,2,5,8,4,6,0,1]
let nums = [100, 4, 200, 1, 3, 2]

function goDown(map, key) {
    let count = 0
    let currentKey = +key - 1
    while(map[currentKey] === 1) {
        count++
        map[currentKey] = 0
        currentKey -= 1
    }
    return count
}
function goUp(map, key) {
    let count = 0
    let currentKey = +key + 1
    while(map[currentKey] === 1) {
        count++
        map[currentKey] = 0
        currentKey += 1
    }
    return count
}

function longestConsecutive(nums) {
    let map = {}
    nums.forEach(num => {
        if (!map[num]) {
            map[num] = 1
        }
    })
    let max = 0
    for (let key in map) {
        let dcount = goDown(map, key)
        let ucount = goUp(map, key)
        max = Math.max(max, dcount + ucount + 1)
    }
    console.log(max)
}

longestConsecutive(nums)
// function longestConsecutive(nums) {
//     let map = new Map()
//     nums.forEach(num => {
//         map.set(num, 1)
//     })
//     let max = 0
//     let upCount = 0
//     function goUpper(map, num) {
//         if (map.get(num+1)) {
//             upCount++
//             map.delete(num+1)
//             goUpper(map, num+1)
//         }
//     }
//     let downCount = 0
//     function goDown(map, num) {
//         if (map.get(num-1)) {
//             downCount++
//             map.delete(num-1)
//             goDown(map, num-1)
//         }
//     }
//     console.log('map', map)
//     for (let [key] of map) {
//         downCount = 0
//         upCount = 0
//         map.delete(key)
//         goDown(map, key)
//         goUpper(map, key)
//         max = Math.max(max, downCount+upCount+1)
//     }
//     return max
// }
// console.log(longestConsecutive(nums))