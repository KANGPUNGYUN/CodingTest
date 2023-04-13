function solution(s) {
    let res = [];
    for (let d of s) if (s.indexOf(d) === s.lastIndexOf(d)) res.push(d);
    return res.sort().join('');
}