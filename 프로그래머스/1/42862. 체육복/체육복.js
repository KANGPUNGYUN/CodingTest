function solution(n, lost, reserve) {
    let lostMap = new Map();
    let reserveMap = new Map();
    
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);
    
    let a = lost.filter(v=>!reserve.includes(v))
    let b = reserve.filter(v=>!lost.includes(v))
    
    for(let i=0; i<b.length; i++){
        reserveMap.set(b[i], 1);
    }
    
    for(let i=0;i<a.length; i++){
        if( reserveMap.get(a[i])===1 ){
            reserveMap.set(a[i], 0);
        }else if( reserveMap.get(a[i]-1)===1 ){
            reserveMap.set(a[i]-1, 0);
        }else if(reserveMap.get(a[i]+1)===1){
            reserveMap.set(a[i]+1, 0);
        }else{
            lostMap.set(a[i], 1);
        }
    }
    
    return n - [...lostMap].length
}