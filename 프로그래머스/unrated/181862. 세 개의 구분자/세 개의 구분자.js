function solution(myStr) {
    return myStr.split(/[a-c]/).filter((v,i)=>v!="").length>0?myStr.split(/[a-c]/).filter((v,i)=>v!=""):["EMPTY"];
}