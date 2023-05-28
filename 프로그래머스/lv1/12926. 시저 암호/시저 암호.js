function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    
    let arr = s.split('');
    let str = '';
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]===' '){
            str += ' '
        }
        else if(arr[i] === arr[i].toUpperCase()){
            if(upper.indexOf(arr[i])+n>=26){
                str += upper[upper.indexOf(arr[i])+n-26]
            }else{
                str += upper[upper.indexOf(arr[i])+n]
            }
        }else if(arr[i] === arr[i].toLowerCase()){
            if(lower.indexOf(arr[i])+n>=26){
                str += lower[lower.indexOf(arr[i])+n-26]

            }else{
                str += lower[lower.indexOf(arr[i])+n]
            }
        }
    }
    return str
}