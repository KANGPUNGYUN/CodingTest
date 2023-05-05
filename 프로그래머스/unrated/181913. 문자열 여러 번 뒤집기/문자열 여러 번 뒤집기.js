function fn(str, arr){
    if(arr.length === 0){
        return str
    }
    let res = str.slice(0, arr[0][0])+str.slice(arr[0][0], arr[0][1]+1).split("").reverse().join("")+str.slice(arr[0][1]+1, str.length);
    arr.shift();
    return fn(res, arr)
}

function solution(my_string, queries) {
    return fn(my_string, queries)
}