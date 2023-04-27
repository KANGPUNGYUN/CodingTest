function solution(myString) {
    return myString.split("x").sort().filter(function(x) {
 return x !== '';});
}