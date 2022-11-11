function solution(hp) {
    let cap = parseInt(hp/5);
    let sup = parseInt((hp - cap*5)/3);
    let work = hp - cap*5 - sup*3
    return cap + sup + work
}