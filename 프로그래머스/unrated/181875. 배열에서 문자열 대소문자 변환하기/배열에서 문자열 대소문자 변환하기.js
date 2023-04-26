function solution(strArr) {
    return strArr.map((element, i)=> i%2===0 ? element.toLowerCase() : element.toUpperCase());
}