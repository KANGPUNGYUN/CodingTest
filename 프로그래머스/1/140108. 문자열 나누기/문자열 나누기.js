function solution(s) {
    let res = []
    let x = 0;
    let count = 0;
    let xCount = 0;
    let yCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[x] === s[i]) {
            xCount += 1;
        } else {
            yCount += 1;
        }

        if (xCount === yCount) {
            count += 1;
            if (count == 1) {
                res.push(s.slice(x, i+1));
                x = i + 1;
                count = 0;
                xCount = 0;
                yCount = 0;
            }
        }
    }
    if (x < s.length && xCount !== yCount) {
        res.push(s.slice(x));
    }

    return res.length;
}