function solution(arr)
{
    const res = [];
   for(let i=0; i<arr.length; i++){
       if(arr[i] == arr[i+1]){
           continue
       }else {
           res.push(arr[i])
       }
   }
    return res
}