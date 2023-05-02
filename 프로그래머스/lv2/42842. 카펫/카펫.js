function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;

    for (let i=3; i<=brown/2; i++) {
        if(total % i !== 0)
            continue;
        if((total/i) * (i-2) - ((i-2)*2) === yellow) {
            answer = [i, total/i];
        }
    }

    return answer;
}
