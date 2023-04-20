function solution(arr, intervals) {
    let arr1 = [];
    let arr2 = [];
    for(let i=intervals[0][0]; i<=intervals[0][1]; i++){
        arr1.push(arr[i]);
    }
    for(let i=intervals[1][0]; i<=intervals[1][1]; i++){
        arr2.push(arr[i]);
    }
    return arr1.concat(arr2);
}