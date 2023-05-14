function solution(l, r) {
    let i = 0;
    while(l>parseInt(i.toString(2),10)*5){
        i++
    }
    let j = 63;
    while(r<parseInt(j.toString(2),10)*5){
        j--
    }
    let arr = [];
    for(let s=i;s<=j;s++){
        arr.push(parseInt(s.toString(2),10)*5)
    }
    return arr.length?arr:[-1];
}