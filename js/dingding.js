// 题目3 实现一个函数，找出一段字符串里面连续重复最多的字符，并返回它的位置，如果是有相同的则返回第一个结果

const str = 'abcdefggghhhhiiijjjj';
// 输出 {char: 'h', startIndex: 9, endIndex: 12}

function findRepeatStr(str) {
    let LEN = str.length
    let indexMap = {}
    // index, count
    for (let i = 0; i < LEN; i++) {
        if (i > 0 && str[i] === str[i-1]) {
            continue
        }
        for (let j = i + 1; j < LEN; j++) {
            if (j === i + 1) {
                indexMap[i] = 1
            }
            if (str[j] === str[i]) {
                indexMap[i] += 1
            } else {
                break
            }
        }
    }

    let index = 0
    let count = 0
    for (let key in indexMap) {
        if (indexMap[key] > count) {
            index = key
            count = indexMap[key]
        }
    }
    console.log(indexMap)
    return {
        char: str[index],
        startIndex: parseInt(index),
        endIndex: parseInt(index)+count-1
    }
}

console.log(findRepeatStr(str))

// 题目2  现在有一个 js 函数，接受一个参数：uid 的数组，数组长度最长 100 ，批量去服务端查询用户 profile：
// const getUserProfileByUids = async (uidList) => {
//    return fetch(`/user/get?uidlist=${encodeURIComponent(uidList.join('.'))}`).then((res) => {
//        return res.json();
//    });
// }
// 服务端的返回值的结构是：  [{uid: "001", nick: 'xx', age: 18},{uid: "002", nick: 'xx', age: 18}]
// 如果传入的 uid 在服务端不存在，在返回值里就没这个 uid 的相关数据
// 现在要求实现一个新的查询方法，接受单个 uid，返回一个 Promise ，查询成功，resolve 这个 uid 的 profile，否则 reject。
// 要求合并 100ms 内的单个查询，只去服务端批量查询一次，不允许使用任何三方库，批量查询直接使用 getUserProfileByUids
// 输入输出样例
// 100ms 内的单个请求能够被合并
// 请求成功和失败都能正确派发请求的结果，对应 promise 的 resove 和 reject
// 窗口内超过 100 个请求，能确保每次批量请求的 ID 个数不超过 100

const getUserProfiledByUid = (uid) => {

};