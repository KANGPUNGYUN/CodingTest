function solution(lottos, win_nums) {
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    let check = 0;
    for(let i = 0; i < win_nums.length; i++){
        if(lottos[i] !== 0){
            if(win_nums.includes(lottos[i])) check++;
        }else continue;
    }
    return [rank[check + lottos.filter(v => v === 0).length], rank[check]];

}