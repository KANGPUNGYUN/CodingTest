function solution(score) {
    let answer = [];
    let averArr = score.map(score=>(score[0]+score[1])/2);
    let rankArr = [...averArr].sort((a,b)=>b-a);
    for(let n of averArr){
        answer.push(rankArr.indexOf(n)+1);
    }
    return answer;
}