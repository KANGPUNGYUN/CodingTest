function solution(phone_book) {
    let arr = phone_book.sort();
    for(let i=1; i<arr.length; i++){
        if(arr[i].startsWith(arr[i-1])){
            return false
        }
    }
    return true
}