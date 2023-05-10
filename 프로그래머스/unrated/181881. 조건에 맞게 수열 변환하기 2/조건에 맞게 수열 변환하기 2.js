function solution(arr) {
    let array = Array(arr.length).fill(0); 
    for(let i=0; i<arr.length; i++){
        while(true){
            if(temp === arr[i]) break
            var temp = arr[i]
            if(arr[i]>=50 && arr[i]%2===0){
                arr[i] /= 2;
            }else if(arr[i]<50 && arr[i]%2===1){
                arr[i] = arr[i]*2+1
            }
            array[i]++
        }
    }
    return array.sort((a,b)=>b-a)[0]-1
}