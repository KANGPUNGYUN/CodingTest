function solution(rny_string) {
    let arr = rny_string.split("");
    let str = "";
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "m"){
            str += "rn";
        }else{
            str += arr[i];
        }
    }
    return str;
}