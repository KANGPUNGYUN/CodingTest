function solution(sides) {
    sides.sort((a,b)=>a-b);
    return 2*sides[0]-1;
}