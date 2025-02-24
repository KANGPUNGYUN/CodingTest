function solution(arr1, arr2) {
    const row = arr1.length;
    const col = arr2[0].length;
    const common = arr2.length;

    const result = Array.from({ length: row }, () => Array(col).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            for (let k = 0; k < common; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;

}