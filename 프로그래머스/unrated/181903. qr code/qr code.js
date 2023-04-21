function solution(q, r, code) {
    let arr = code.split("");
    let str = "";
    for(let i =0; i<arr.length; i++){
        if(i%q === r){
            str += arr[i];
        }
    }
    return str;
}