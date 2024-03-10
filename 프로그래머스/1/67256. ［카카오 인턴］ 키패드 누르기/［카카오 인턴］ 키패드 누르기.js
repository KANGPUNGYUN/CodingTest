function solution(numbers, hand) {
    let num = [
        [1,3],
        [0,0],
        [1,0],
        [2,0],
        [0,1],
        [1,1],
        [2,1],
        [0,2],
        [1,2],
        [2,2]
    ]
    let left = [0,3];
    let right = [2,3];
    let res = "";
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            left = num[numbers[i]];
            res += "L"
        }else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            right = num[numbers[i]];
            res += "R"
        }else{
            if(Math.abs(left[0]-num[numbers[i]][0])+Math.abs(left[1]-num[numbers[i]][1]) > Math.abs(right[0]-num[numbers[i]][0])+Math.abs(right[1]-num[numbers[i]][1])){
                right = num[numbers[i]];
                res += "R"
            }else if(Math.abs(left[0]-num[numbers[i]][0])+Math.abs(left[1]-num[numbers[i]][1]) < Math.abs(right[0]-num[numbers[i]][0])+Math.abs(right[1]-num[numbers[i]][1])){
                left = num[numbers[i]];
                res += "L"
            }else{
                if(hand==="left"){
                    left = num[numbers[i]];
                    res += "L"
                }else{
                    right = num[numbers[i]];
                    res += "R"
                }
            }   
        }
    }
    return res
}