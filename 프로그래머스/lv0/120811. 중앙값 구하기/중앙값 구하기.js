function solution(array) {
    var answer = 0;
    let n = parseInt(array.length/2);

    return array.sort(function(a, b)  {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
})[n];
}