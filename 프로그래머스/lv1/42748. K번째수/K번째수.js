function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        let one = commands[i][0]-1;
        let two = commands[i][1];
        let three = commands[i][2]-1;

        let a = array.slice(one,two).sort(function(a, b) {
  return a - b;
});

        answer.push(a[three]);
    }
    return answer;
}