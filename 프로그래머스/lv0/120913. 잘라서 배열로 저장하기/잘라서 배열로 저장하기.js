function solution(my_str, n) {
    let m = my_str.length / n
    let arr = [];
    for(let i = 0; i < m; i++){
       arr[i] = my_str.slice(n*i, (i+1)*n);
    }
    return arr
}