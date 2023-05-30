function solution(name, yearning, photo) {
    let hash = new Map();
    let res = Array(photo.length).fill(0)
    for(let i=0; i<name.length; i++){
        hash.set(name[i], yearning[i]);
    }
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            if(hash.get(photo[i][j])){
                res[i] += hash.get(photo[i][j])
            }
        }
    }
    return res
}