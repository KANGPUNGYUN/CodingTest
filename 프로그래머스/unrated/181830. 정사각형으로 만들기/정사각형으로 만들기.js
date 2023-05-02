function solution(arr) {
    let inner = arr[0].length
    let outter = arr.length
    if(inner < outter){
        for(let i=0; i<outter; i++){
            for(let j=0; j<outter-inner; j++){
                arr[i].push(0);
            }
        }
    }else if(inner > outter){
        for(let j=0; j<inner-outter; j++){
            arr.push(Array(inner).fill(0));
        }
    }
    return arr;
}