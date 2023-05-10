function solution(my_string) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let arr = new Array(52).fill(0);
    [...my_string].forEach(v=>arr[alphabet.indexOf(v)]++)
    return arr;
}