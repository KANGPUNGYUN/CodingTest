function solution(my_string, index_list) {
    let arr = my_string.split('');
    let str = '';
    for(let i =0; i<index_list.length; i++){
        str += arr[index_list[i]];
    }
    return str
}