function solution(participant, completion) {
    const map = new Map();
    for(let i=0; i<participant.length; i++){
        map.set(participant[i], map.get(participant[i]) ? map.get(participant[i]) + 1 : 1)
    }
    for(let i=0; i<completion.length; i++){
        map.set(completion[i], map.get(completion[i]) - 1)
    }
    
    return [...map].filter(v=>v[1]===1)[0][0]
}