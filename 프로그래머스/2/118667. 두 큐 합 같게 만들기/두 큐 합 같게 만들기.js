function solution(queue1, queue2) {
    let tried = 0;
    const totalLength =  queue1.length + queue2.length;
    let index1 = 0;
    let index2 = 0;
    let sum1 = queue1.reduce((cur, acc) => cur + acc, 0)
    let sum2 = queue2.reduce((cur, acc) => cur + acc, 0)
    let isSame = false
    
    while(tried < totalLength*2){
        if(sum1 > sum2){
            const shift = queue1[index1++];
            sum1 -= shift;
            sum2 += shift;
            queue2.push(shift)
        }else if(sum1 < sum2){
            const shift = queue2[index2++];
            sum1 += shift;
            sum2 -= shift;
            queue1.push(shift)
        }else{
            isSame = true
            break
        }
        tried++
    }
    return isSame ? tried : -1
}