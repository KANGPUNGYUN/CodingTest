function solution(my_string, indices) {
    let arr = Array(my_string.length).fill(0).map((v,i)=>v=v+i);
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<indices.length; j++){
            if(arr[i] === indices[j]){
                arr[i] = '';
            }
        }
    }
    let res = arr.filter((v)=>v!=='');
    let str = "";
    for(let i=0; i<res.length; i++){
        str += my_string[res[i]]
    }
    return str
}