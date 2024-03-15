function solution(want, number, discount) {
    let map1 = new Map();
    for(let i=0; i<want.length; i++){
        map1.set(want[i], number[i])
    }
    let count = 0;
    map1 = [...map1].sort();
    for(let i=0; i<discount.length-9; i++){
        let map2 = new Map();
        for(let j=0; j<10; j++){
            map2.set(discount[i+j], map2.get(discount[i+j])+1 || 1)
        }
        map2 = [...map2].sort()
        let id = map2.every((val,index,arr)=>arr[index][0]===map1[index][0] && arr[index][1]===map1[index][1])
        if(id){
            count++
        }
    }
    return count
}