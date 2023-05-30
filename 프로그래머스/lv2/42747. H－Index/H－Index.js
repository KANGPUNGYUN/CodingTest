function solution(citations) {
    citations.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            res++;
        }
    }
    return res;
}