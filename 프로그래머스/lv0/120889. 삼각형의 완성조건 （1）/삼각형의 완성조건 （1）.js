function solution(sides) {
    let sorted = sides.sort(function(a,b) {return b-a});
    return sorted[0] < sorted[1]+sorted[2]? 1 : 2;
}