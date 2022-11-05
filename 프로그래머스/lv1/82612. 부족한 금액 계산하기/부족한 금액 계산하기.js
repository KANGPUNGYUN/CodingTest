function solution(price, money, count) {
    var answer = -1;
    
    money>(count**2+count)/2*price?answer = 0:answer = (count**2+count)/2*price-money
    return answer;
}