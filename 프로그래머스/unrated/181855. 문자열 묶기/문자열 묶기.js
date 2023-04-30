function solution(strArr) {
    let res = strArr.map((v)=>v.length).reduce((acc, cur)=>{
        acc[cur]=(acc[cur]||0)+1;
        return acc;
    }, []);
    return res.map((v)=>v).reduce((max,cur)=>max<cur?cur:max);
}