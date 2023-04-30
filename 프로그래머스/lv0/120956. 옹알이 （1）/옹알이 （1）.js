function solution(babbling) {
    return babbling.map((v) => v.replace(/aya|ye|woo|ma/g, '')).filter((str) => !str).length;
}