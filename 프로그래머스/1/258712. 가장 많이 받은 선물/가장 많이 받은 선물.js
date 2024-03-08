function solution(friends, gifts) {
    const give = new Map();
    let arr = Array.from(Array(friends.length), ()=>Array(friends.length).fill(0));
    let res = Array(friends.length).fill(0);

    friends.map(i=>give.set(i,0));
    gifts.map(i=>{
        arr[friends.indexOf(i.split(" ")[0])][friends.indexOf(i.split(" ")[1])]++;
        give.set(i.split(" ")[0], give.get(i.split(" ")[0])+1);
        give.set(i.split(" ")[1], give.get(i.split(" ")[1])-1);
    });
    
    for(let i=0; i<friends.length; i++){
            for(let j=0; j<friends.length; j++){
                if(i!==j){
                    if(arr[i][j] > arr[j][i]){
                        res[i]++
                    }
                    if(arr[i][j] === arr[j][i] && give.get(friends[i]) > give.get(friends[j])) {
                        res[i]++
                    }
                }
            }
    }
    
    return Math.max(...res);
}