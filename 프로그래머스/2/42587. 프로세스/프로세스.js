function solution(priorities, location) {
    let res = 0;
    let queue = [];

    queue = priorities.map((priority, index) => {
        return {priority, index}
    })
    
    while(queue.length>0){
        let current = queue.shift();
        if(current.priority<Math.max(...queue.map(i=>i.priority))){
            queue.push(current)
        }else{
            res++
            if(current.index === location){
                return res
            }
        }
            
    }
}