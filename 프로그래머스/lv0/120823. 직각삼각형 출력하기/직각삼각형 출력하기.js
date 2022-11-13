const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let tri = '';
    for(let i = input[0]-1; i>=0; i--){
        let star = '';
        for(let j = 1; j<=input[0]-i; j++){
            star += "*";
        }
        tri += star + '\n'
    }
    console.log(tri)
});