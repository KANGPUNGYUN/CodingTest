function solution(clothes) {
    let hash = new Map();
    let res = 1;
    for(let i=0; i<clothes.length; i++){
        if(hash.get(clothes[i][1])){
            hash.set(clothes[i][1], hash.get(clothes[i][1])+1);
        }else{
            hash.set(clothes[i][1], 1);
        }
    }
    for(let key of hash.values()){
        res *= (key+1)
    }
    return res-1
}