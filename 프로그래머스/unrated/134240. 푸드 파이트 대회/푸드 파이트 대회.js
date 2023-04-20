function solution(food) {
    let arr = [];
    let str = "";
    for(let i = 1; i<food.length; i++){
        arr.push(Math.floor(food[i]/2));
    }
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i]; j++){
            str += `${i+1}`
        }
    }
    let reverse = str.split("").sort((a,b)=>b-a).join("");
    return  str+"0"+reverse;
}