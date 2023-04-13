function solution(s) {
    let lowercase = s.toLowerCase();
    return lowercase.replace(/\b[a-z]/g, char => char.toUpperCase());
}