function solution(num_list, n) {
    let res = [];
    for(let i = 0; i<num_list.length; i+=n){
        res.push(num_list.slice(i, i+n));
    }
    return res;
}