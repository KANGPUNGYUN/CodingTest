function solution(numbers) {
    let res = [];
    for(let number of numbers)
        res.push(number.toString());

    res.sort((a,b)=>{
        return (b+a)-(a+b);
    });

    return res.join("")[0] == "0" ? "0" : res.join("");
}