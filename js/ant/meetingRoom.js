/* 给出一个函数，找出会议室的可预订时间

已知会议室每天可预订时间为早上9点到晚上22点 ["09:00" , "22:00"] 目前会议室已经被订出的时间区间为 [["10:00","12:00"], ["14:00","18:00"],["19:00", "20:00"]] 找出其他可预订的时间点 返回 [["09:00","10:00"],["12:00","14:00"],["18:00", "19:00"],["20:00", "22:00"]] */

// function findBookable(arg1, arg2){ // Your code here ... }

// findBookable(["09:00" , "22:00"], [["10:00","12:00"], ["14:00","18:00"],["19:00", "20:00"]]) //返回 [["09:00","10:00"],["12:00","14:00"],["18:00", "19:00"],["20:00", "22:00"]]

let bookableRange = ['09:00', '22:00']
let inputRanges = [["10:00","12:00"], ["14:00","18:00"],["19:00", "20:00"]]

function findBookable(bookableRange, inputRanges) {
    let bookableStartMins = convertToMinutes(bookableRange[0])
    let bookableEndMins = convertToMinutes(bookableRange[1])

    let availableMins = (new Array(bookableEndMins)).fill(1)
    for (let inputRange of inputRanges) {
        let startMins = convertToMinutes(inputRange[0])
        let endMins = convertToMinutes(inputRange[1])

        for (let i = startMins; i < endMins; i++) {
            availableMins[i] = 0
        }
    }
    let res = []
    for (let i = bookableStartMins; i < availableMins.length; i++) {
        if (availableMins[i] === 1) {
            res.push(walk(availableMins, i))
        }
    }
    console.log(res)
}

findBookable(bookableRange, inputRanges)

function walk(availableMins, startIndex) {
    let endIndex = startIndex
    let start = startIndex
    while(availableMins[start] === 1) {
        availableMins[start] = 0
        start++
        endIndex = start
    }
    return [convertToTimeFormat(startIndex), convertToTimeFormat(endIndex)]
}
function convertToMinutes(time) {
    const parts = time.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}
function convertToTimeFormat(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}
