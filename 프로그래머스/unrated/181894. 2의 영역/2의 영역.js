function solution(arr) {
    if(arr.indexOf(2) === -1){
        return [-1]
    }else if(arr.indexOf(2) === arr.lastIndexOf(2)){
        return [2]
    }
    let list = [];
    for(let i = arr.indexOf(2); i <= arr.lastIndexOf(2); i++){
        list.push(arr[i]);
    }
    return list
}