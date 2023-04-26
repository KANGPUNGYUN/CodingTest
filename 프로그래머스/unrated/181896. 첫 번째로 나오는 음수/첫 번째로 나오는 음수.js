function solution(num_list) {
    return num_list.indexOf(num_list.find(element=>element<0));
}