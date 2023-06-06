let input = parseInt(require('fs').readFileSync('/dev/stdin'));
let stars = ''
for(let i=0; i<input; i++){
    stars += '*'
    console.log(stars)
}