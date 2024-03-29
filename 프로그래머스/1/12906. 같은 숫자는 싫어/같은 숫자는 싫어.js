function solution(arr)
{
    let res = [arr[0]];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] !==arr[i+1]){
            res.push(arr[i+1])
        } 
    }
    return res 
}