function solution(my_string) {
    return my_string.split('').filter(x=>x>0).map(Number).reduce((a,b)=>a+b);
}