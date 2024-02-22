let str = 'asdfasdfo'

function firstOnlyOne(str) {
    let LEN = str.length
    let exclude = {}
    for (let i = 0; i < LEN; i++) {
        if (exclude[str[i]]) {
            continue
        }
        for (let j = i + 1; j < LEN; j++) {
            if (str[i] === str[j]) {
                exclude[str[i]] = 1
                break
            }
            if (j === LEN - 1) {
                console.log(str[i])
                return
            }
        }
        if (i === LEN - 1) {
            console.log(str[i])
            return
        }
    }
    console.log(-1)
}

firstOnlyOne(str)