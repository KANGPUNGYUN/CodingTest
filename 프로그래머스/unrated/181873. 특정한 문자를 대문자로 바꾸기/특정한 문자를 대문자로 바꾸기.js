function solution(my_string, alp) {
    let str = "";
    let arr = my_string.split("");
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===alp){
            str += alp.toUpperCase();
        }else{
            str += arr[i];   
        }
    }
    return str;
}