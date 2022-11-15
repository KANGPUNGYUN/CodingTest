function solution(i, j, k) {
    let arr = [];
    let sum = 0;
    for(let a = i; a <= j; a++){
        arr.push(a);
    }
    let str = arr.join("").split("")
    for(let a in str){
        if(str[a] == k){
            sum += 1;
        }
    }
    return sum;
}