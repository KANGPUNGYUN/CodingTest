function solution(str1, str2) {
    let res = '';
    let one = str1.split('');
    let two = str2.split('');
    for(let i=0; i<one.length; i++){
        res += one[i];
        res += two[i];
    }
    return res;
}