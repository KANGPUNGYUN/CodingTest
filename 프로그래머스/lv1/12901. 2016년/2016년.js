function solution(a, b) {
    var answer = new Date(`${a}/${b}/16`).getDay();
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return day[answer];
}