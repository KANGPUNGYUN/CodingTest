function solution(n) {
    let oneCount = n.toString(2).split("1").length;
    while (true) {
        n++;
        if (n.toString(2).split("1").length === oneCount) return n;
    }
}