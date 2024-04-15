// let buses = [10,20]
// let psgs = [2,17,18,19]

// let buses = [20,30,10]
// let psgs = [19,13,26,4,25,11,21]

// let buses = [2]
// let psgs = [2]

// let buses = [3]
// let psgs = [4]

// let buses = [5]
// let psgs = [2,3]

let buses = [5, 15]
let psgs = [11,12,13,14,15]

var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    let sortedBuses = buses.sort((a, b) => {
        return a - b
    })
    let sortedPsgers = [...passengers].sort((a, b) => {
        return a - b
    })
    let LEN = sortedBuses.length
    // console.log(sortedBuses)
    // console.log(sortedPsgers)
    let map = {}
    for (let i = 0; i < LEN; i++) {
        let bus = sortedBuses[i]
        map[bus] = []
        while (sortedPsgers[0] <= bus && map[bus].length < capacity) {
            map[bus].push(sortedPsgers[0])
            sortedPsgers.shift()
        }
    }
    let lastPsgs = map[sortedBuses[LEN - 1]]
    if (lastPsgs.length === capacity) { // 满了
        let max = lastPsgs[lastPsgs.length - 1]
        console.log(max, lastPsgs, 111)
        while(max > 0) {
            if (!passengers.includes(max)) {
                return max
            }
            max--
        }
    } else { // 没满
        // 没乘客
        if (lastPsgs.length === 0) {
            return sortedBuses[LEN - 1]
        }
        let max = sortedBuses[LEN - 1]
        while(max > 0) {
            if (!passengers.includes(max)) {
                return max
            }
            max--
        }
    }
};

console.log(latestTimeCatchTheBus(buses, psgs, 2))