function solution(emergency) {
    let map = new Map();
    let sort = [...emergency].sort(function(a,b){return b-a});
    for(let i = 0; i < sort.length; i++){
        map.set(sort[i] , i+1);
    }
    return emergency.map(v=>map.get(v));
}