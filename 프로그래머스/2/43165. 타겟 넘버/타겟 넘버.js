function solution(numbers, target) {
    let res = 0;
    function f(x, n = 0) {
        if(n === numbers.length) {
            if(x === target) res++;
            return;
        };

        f(x + numbers[n], n + 1);
        f(x - numbers[n], n + 1);
    }

    f(numbers[0], 1)
    f(numbers[0] * -1, 1)

    return res;
}