function solution(s) {
    let arr = s.split('');
    let str = '';
    let res = []
    for(let i=0; i<arr.length; i++){
        str += arr[i];
        if(str.indexOf(arr[i]) !== str.lastIndexOf(arr[i])){
            res.push(str.lastIndexOf(arr[i])-str.lastIndexOf(arr[i], i-1))
        }else{
            res.push(-1)
        }
    }
    return res
}