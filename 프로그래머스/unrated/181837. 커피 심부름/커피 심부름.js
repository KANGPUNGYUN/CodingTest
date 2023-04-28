function solution(order) {
    let cost = 0;
    for(let i=0; i<order.length; i++){
        if(order[i].includes("cafelatte")){
            cost += 5000;
        }else{
            cost += 4500;
        }
    }
    return cost;
}