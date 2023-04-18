function solution(keyinput, board) {
    let up = 0;
    let right = 0;
    let a = (board[0]-1)/2;
    let b = (board[1]-1)/2;
    for(let i = 0; i<keyinput.length; i++){
        if(keyinput[i]==="up"){
            (up !== b) ? up++ : up = b;
        }else if(keyinput[i]==="down"){
            (up !== -b) ? up-- : up = -b;
        }else if(keyinput[i]==="right"){
            (right !== a) ? right++ : right = a;
        }else if(keyinput[i]==="left"){
            (right !== -a) ? right-- : right = -a;
        }
    }

    
    return [right, up];
}