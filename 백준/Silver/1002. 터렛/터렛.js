let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, ...arr] = input;

for(let i=0; i<N; i++){
    let coord = arr[i].split(' ').map(n=>parseInt(n));
    [a, b, c, x, y, z] = coord;
    let r = Math.sqrt((a-x)*(a-x) + (b-y)*(b-y));

    if(r===0){
      if(c===z){
        console.log(-1)
      }else{
        console.log(0)
      }
    }else{
      if(r>Math.abs(c-z) && r<(c+z)){
        console.log(2)
      }else if(r===(c+z)){
        console.log(1)
      }else if(r>(c+z)){
        console.log(0)
      }else if(r===Math.abs(c-z)){
        console.log(1)
      }else{
        console.log(0)
      }
    }
}