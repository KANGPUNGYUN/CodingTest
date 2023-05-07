function solution(arr, query) {
    let index = 0;
    for(let i=0; i<query.length; i++){
        if(index === 0){
            arr = arr.slice(0, query[i]+1);
            index++
        }else{
            arr = arr.slice(query[i], arr.length);
            index--
        }
    }
    return arr
}