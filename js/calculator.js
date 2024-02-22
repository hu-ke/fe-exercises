const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    let s = line.replace("{", "(") 
    s = s.replace("}", ")") 
    s = s.replace("[", "(") 
    s = s.replace("]", ")")
    console.log(eval(s))
});


