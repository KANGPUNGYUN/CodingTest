function solution(array, n) {
    let abs = [];
    let arr = [];
    for(let i in array){
        abs.push(Math.abs(array[i]-n));
    }
    const min = [...abs].sort(function(a,b){return a-b})[0];
    let idx = abs.indexOf(min)
    while(idx != -1)  {
      arr.push(idx);
      idx = abs.indexOf(1, idx+1);
    }
    let temp = 100;
    for(let i in arr){
        if(array[arr[i]]<=temp){
            temp = array[arr[i]];
        }
    }
    return temp
}