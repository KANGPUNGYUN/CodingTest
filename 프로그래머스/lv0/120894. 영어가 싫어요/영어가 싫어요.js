function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    nums.map((v, i) => (numbers = numbers.replaceAll(v, i)));
    return parseInt(numbers);
}