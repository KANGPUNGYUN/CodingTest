function solution(word) {
    let map = new Map([["A",1], ["E",2], ["I",3], ["O",4], ["U",5]])
    let res = 0;
    for(let i=0; i<word.length; i++){
        res += Math.floor((map.get(word[i])-1)*(5**(5-i)-1)/4)+1
    }
    return res
}