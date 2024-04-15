// 编写calc函数
// -实现多参数累乘功能（参数数量不限） 
// -对于相同传入的参数(不计先后)可以缓存结果  
// -缓存在空间上不能无限膨胀，如何对缓存策略做优化     
 
// Calc(1,2,3)  //6
// Calc(4,2)  //8
// Calc(9,1,3, 2)  //54

let map = {}
const CAPACITY = 5

function updateMap(key, sum) {
    let oldestKey = null
    Object.keys(map).forEach(key => {
        if (!oldestKey) {
            oldestKey = key
        } else {
            if (map[oldestKey].time > map[key].time) {
                oldestKey = key
            }
        }
    })
    // 得到oldestKey
    delete map[oldestKey]
    map[key] = sum
}

function Calc() {
    let args = Array.from(arguments)
    args.sort((a, b) => a - b)
    let key = args.join(',')
    if (map.hasOwnProperty(key)) {
        return map[key].sum
    }
    let doCalc = function() {
        let sum = 1
        args.forEach(arg => {
            sum *= arg
        })
        return sum
    }
    let sum = doCalc()
    if (Object.keys(map).length < CAPACITY) {
        map[key] = {
            sum: sum,
            time: (new Date()).getTime()
        }
    } else {
        updateMap(key, sum)
    }
    return sum
}

console.log(Calc(1,2,3))
console.log(Calc(1,2,3))
Calc(4,2)  // 8
Calc(9,1,3, 2)  //54