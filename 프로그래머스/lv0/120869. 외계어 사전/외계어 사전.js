function solution(spell, dic) {
    let res = 2;
    let arr = new Array(dic.length).fill(0);
    for(let i =0; i<spell.length; i++){
        for(let j = 0; j<dic.length; j++){
            if(dic[j].includes(spell[i])){
                arr[j]++;
            }
            if(arr[j]===spell.length){
                res = 1;
            }
        }
    }
    
    return res;
}