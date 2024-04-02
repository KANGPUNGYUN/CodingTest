function solution(progresses, speeds) {
    const res = [];
    const rest = [];
    for(let i=0; i<speeds.length; i++){
        rest.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    
    let curMax = rest[0];
    let count = 0;
    for(let i = 0; i < rest.length; i++) {
        if(curMax >= rest[i]) {
            count++;
        } else {
            res.push(count);
            count = 1;
            curMax = rest[i];
        }
    }

    res.push(count);
    return res
}