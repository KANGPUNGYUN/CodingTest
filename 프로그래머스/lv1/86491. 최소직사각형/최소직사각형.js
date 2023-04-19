function solution(sizes) {
    let width = [];
    let height = [];
    for(let i = 0; i<sizes.length; i++){
        sizes[i].sort((a,b)=>b-a);
    }
    console.log(sizes)
    for(let i = 0; i<sizes.length; i++){
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    }
    width.sort((a,b)=>b-a);
    height.sort((a,b)=>b-a);
    return width[0]*height[0];
    
}