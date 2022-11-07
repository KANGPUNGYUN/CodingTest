function solution(strlist) {
    for(let i in strlist){
        strlist[i] = strlist[i].length;
    }
    
    return strlist
}