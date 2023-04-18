function solution(dots) {
    let width = [];
    let height = [];
    for(let i = 0; i<4; i++){
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    width.sort((a,b)=> b-a);
    height.sort((a,b)=> b-a);
    return (width[0]-width[2])*(height[0]-height[2]);
}