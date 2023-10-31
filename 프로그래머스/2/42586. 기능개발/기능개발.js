function solution(progresses, speeds) {
    const rest = progresses.map( v => 100 - v);
    const res = rest.map((v,i)=> Math.ceil(v/speeds[i]));
    let arr = [];
    let init = 1;
    let max = res[0];
    for(let i=0; i<res.length; i++){
        if(max<res[i+1]){
            arr.push(init)
            init = 1;
            max = res[i+1];
        }else{
            init++
        }
    }
    let last = arr.reduce((acc,cur)=> acc+ cur, 0)
    if(speeds.length - last !== 0){
        arr.push(speeds.length - last)    
    }
    return arr
}