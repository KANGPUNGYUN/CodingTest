function solution(s) {
    s = s.split("");
    let res = 0;
    for(let i=0; i<s.length; i++){
        let first = s.shift();
        s.push(first);
        let count = [];
        let isPushed = false;
        for(let j=0; j<s.length; j++){
            if(s[j] === "{" || s[j] === "[" || s[j] === "("){
                count.push(s[j]);
                isPushed = true;
            }
            if(s[j] === "}" && count[count.length-1] ==="{"){
                count.pop();
            }
            if(s[j] === "]" && count[count.length-1] ==="["){
                count.pop();
            }
            if(s[j] === ")" && count[count.length-1] ==="("){
                count.pop();
            }
        }
        if(isPushed && count.length===0){res++;}
    }
    return res
}