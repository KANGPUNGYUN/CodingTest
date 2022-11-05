function solution(s) {
    var answer = '';
    let arr = s.split(" ");

    for(let i =0; i < arr.length; i++){
        let a = '';
        for(let j = arr[i].length-1; j>=0; j--){
            if(j%2 === 0){
                a = arr[i][j].toUpperCase().concat("", a);
            }else{
                a = arr[i][j].toLowerCase().concat("", a);
            }
        }
        answer += a+" ";
    }
    answer = answer.slice(0, -1);
    return answer;
}