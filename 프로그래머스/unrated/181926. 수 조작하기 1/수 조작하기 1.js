function solution(n, control) {
    let arr = control.split("");
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "w"){
            n++;
        }
        if(arr[i] === "s"){
            n--;
        }
        if(arr[i] === "d"){
            n += 10;
        }
        if(arr[i] === "a"){
            n -= 10;
        }
    }
    return n;
}