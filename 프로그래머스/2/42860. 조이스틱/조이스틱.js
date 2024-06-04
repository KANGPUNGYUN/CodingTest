function solution(name) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let count = 0;
    
    for(let i=0; i<name.length; i++){
        count += Math.min(str.indexOf(name[i]), Math.abs(26 - str.indexOf(name[i])))
    }
    
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        
        let move = i + name.length - next + Math.min(i, name.length - next);
        minMove = Math.min(minMove, move);
    }
    
    count += minMove;

    return count
}