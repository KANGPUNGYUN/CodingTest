function solution(myString, pat) {
    let arr = [];
    let cnt = 0;
    for(let i=0;i<myString.length-pat.length+1; i++){
        arr.push(myString.slice(i,i+pat.length))
    }
    for(let i=0;i<arr.length; i++){
        if(arr[i]===pat){
            cnt++
        }
    }
    return cnt
}