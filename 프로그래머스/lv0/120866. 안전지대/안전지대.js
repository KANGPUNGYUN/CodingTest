function solution(board) {
    let n = board.length;
    
    function isSafe(x, y){
        let range = (k) => [k - 1, k, k + 1];
        for (let ry of range(y)) {
            for (let rx of range(x)) {
                if (board[ry]?.[rx]) {
                    return false;
                }
            }
        }
        return true;
    };
    
    let answer = 0;
    for (let y = 0; y < n; ++y) {
        for (let x = 0; x < n; ++x) {
            answer += isSafe(x, y);
        }
    }
    return answer;
}