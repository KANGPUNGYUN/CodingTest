function solution(keymap, targets) {
    let res = Array(targets.length).fill(0)
    for(let i=0; i<targets.length; i++){
        let arr = targets[i].split("");
        for(let j=0; j<arr.length; j++){
            if(!keymap.some((val)=>val.indexOf(arr[j])>=0)){
                res[i] = -1
                break
            }else{
                res[i] += Math.min(...keymap.filter(v=>v.indexOf(arr[j])!==-1).map(v=>v.indexOf(arr[j])))+1
            }
        }
    }
    return res
}