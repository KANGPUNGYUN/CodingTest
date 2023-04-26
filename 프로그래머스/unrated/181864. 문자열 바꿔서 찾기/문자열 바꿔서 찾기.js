function solution(myString, pat) {
    return myString.includes(pat.split("").map(a=>a==="A"? a="B":a="A").join(""))?1:0;
}