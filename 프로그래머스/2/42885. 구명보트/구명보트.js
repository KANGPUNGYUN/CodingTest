function solution(people, limit) {
  let desc = people.sort((a, b) => b-a);
  let cnt = 0;

  desc.forEach((people)=>{
      if(people+desc.at(-1) > limit){
          cnt++
      }else{
          desc.pop();
          cnt++
      }
  })
    
  return cnt
}