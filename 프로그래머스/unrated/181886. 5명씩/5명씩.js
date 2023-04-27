function solution(names) {
    return names.map((v,i)=>i%5===0?v:null).filter((v,i)=>v!=null);
}