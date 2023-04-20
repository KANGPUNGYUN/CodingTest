function solution(my_string, s, e) {
    let arr = my_string.split("");
    let str1 = "";
    let str2 = "";
    let str3 = "";
    for(let i = 0; i<s; i++){
        str1 += arr[i];
    }
    for(let i = s; i<=e; i++){
        str2 += arr[i];
    }
    for(let i = e+1; i<arr.length; i++){
        str3 += arr[i];
    }
    let rev = str2.split("").reverse().join("");
    return str1 + rev + str3;
}