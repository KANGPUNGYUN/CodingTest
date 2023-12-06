function solution(board, moves) {
    let res = 0;
    const firstColumn = Array(board[0].length).fill(0)

    for(let column=0;column<board[0].length;column++){
        for(let row=0;row<board.length;row++){
            if(board[row][column] !== 0){
                firstColumn[column] = row
                break;
            }
        }
    }

    const stack = []
    moves.forEach(move=>{
        const column = move-1
        const row = firstColumn[column]
        firstColumn[column]++
        if(board[row] !== undefined){
            const last = stack.at(-1)
            const pushed = board[row][column]
            if(last === pushed){
                stack.pop()
                res += 2
            }
            else{
                stack.push(board[row][column])
            }
        }
    })

    return res;
}