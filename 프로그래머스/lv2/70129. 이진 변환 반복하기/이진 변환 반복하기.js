function fn(zero, time, s){
    if(s==="1"){
        return [time, zero];
    }
    num = s.split("");
    sum=0;
    for(let i =0; i<s.length; i++){
        sum += parseInt(num[i]);
    }
    zero += (s.length - sum);
    time++;
    return fn(zero, time, sum.toString(2));
}

function solution(s) {
    return fn(0,0,s);
}