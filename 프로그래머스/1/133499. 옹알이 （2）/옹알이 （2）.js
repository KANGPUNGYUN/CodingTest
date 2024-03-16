function solution(babbling) {

    for(let i=0; i<babbling.length; i++){
        if(!babbling[i].includes("ayaaya") && !babbling[i].includes("woowoo") && !babbling[i].includes("mama") && !babbling[i].includes("yeye")) {babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "")};
    }
    
    return babbling.filter(v=>v==="").length;

}