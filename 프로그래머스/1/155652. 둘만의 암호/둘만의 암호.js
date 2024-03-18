function solution(s, skip, index) {
    let word = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let regexp = new RegExp(skip.split("").join("|"), "g")
    word = word.replaceAll(regexp, "");
    s=s.split("");
    for(let i=0; i<s.length; i++){
        s[i] = word[word.indexOf(s[i])+index]
    }
    return s.join("")
}