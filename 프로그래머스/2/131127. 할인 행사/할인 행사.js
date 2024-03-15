function solution(want, number, discount) {
    let map1 = new Map();
    for(let i=0; i<want.length; i++){
        map1.set(want[i], number[i])
    }
    let count = 0;
    map1 = [...map1].sort();
    for(let i=0; i<discount.length-9; i++){
        let map2 = new Map();
        map2.set(discount[i], 1)
        map2.set(discount[i+1], map2.get(discount[i+1])+1 || 1)
        map2.set(discount[i+2], map2.get(discount[i+2])+1 || 1)
        map2.set(discount[i+3], map2.get(discount[i+3])+1 || 1)
        map2.set(discount[i+4], map2.get(discount[i+4])+1 || 1)
        map2.set(discount[i+5], map2.get(discount[i+5])+1 || 1)
        map2.set(discount[i+6], map2.get(discount[i+6])+1 || 1)
        map2.set(discount[i+7], map2.get(discount[i+7])+1 || 1)
        map2.set(discount[i+8], map2.get(discount[i+8])+1 || 1)
        map2.set(discount[i+9], map2.get(discount[i+9])+1 || 1)
        map2 = [...map2].sort()
        let id = map2.every((val,index,arr)=>arr[index][0]===map1[index][0] && arr[index][1]===map1[index][1])
        if(id){
            count++
        }
    }
    return count
}