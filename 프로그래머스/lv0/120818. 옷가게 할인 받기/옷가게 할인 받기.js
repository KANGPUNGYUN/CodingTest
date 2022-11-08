function solution(price) {
    if(300000>price && price>=100000){
        return parseInt(price*95/100);
    } else if(500000>price && price>=300000){
        return parseInt(price*0.9);
    } else if(price>=500000){
        return parseInt(price*0.8);
    }
    return price;
}