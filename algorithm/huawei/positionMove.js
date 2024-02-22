// https://www.nowcoder.com/practice/119bcca3befb405fbe58abe9c532eb29?tpId=37&tqId=21240&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

let commandsStr = 
'A10;S20;W10;D30;X;A1A;B10A11;;A10;'

function isValidCommand(command) {
    return /^[ASWD]\d+$/.test(command)
}

function positionMove(commandsStr) {
    let commands = commandsStr.split(';')
    let position = [0, 0]
    for (let command of commands) {
        if (command && isValidCommand(command)) {
            let direction = command[0]
            let distance = parseInt(command.slice(1))
            if (direction === 'A') {
                position[0] -= distance
            } else if (direction === 'D') {
                position[0] += distance
            } else if (direction === 'W') {
                position[1] += distance
            } else if (direction === 'S') {
                position[1] -= distance
            }
        }
    }
    console.log(position)
}

positionMove(commandsStr)
