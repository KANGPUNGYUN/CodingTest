function solution(phone_book) {
    let res = phone_book.sort().some((v,i,arr)=>arr[i+1]?.indexOf(v)===0);
    return !res
}