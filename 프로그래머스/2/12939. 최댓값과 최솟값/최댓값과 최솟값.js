function solution(s) {
    let arr = s.split(" ").map((i)=>Number(i));
    let max = arr.sort((a,b)=> b-a)[0];
    let min = arr.sort((a,b)=> b-a)[arr.length -1];
    return `${min} ${max}`
}