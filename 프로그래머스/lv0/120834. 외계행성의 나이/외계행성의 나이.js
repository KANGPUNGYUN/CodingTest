function solution(age) {
    let obj = {"0":"a", "1":"b", "2":"c", "3":"d", "4":"e", "5":"f", "6":"g", "7":"h", "8":"i", "9":"j"};
    let arr = age.toString().split('');
    let res = [];

    for(let i in arr){
        res.push(obj[arr[i]]);
    }
    return res.join("");
}