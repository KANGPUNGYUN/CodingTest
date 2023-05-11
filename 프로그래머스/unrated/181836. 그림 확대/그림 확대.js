function solution(picture, k) {
    let arr = []
    for(let i=0;i<picture.length;i++){
        let str = ''
        for(let j=0;j<picture[i].length;j++){
            let l=0
            while(l<k){
                str += picture[i][j];
                l++
            }
        }
        let l=0
            while(l<k){
                arr.push(str)
                l++
            }
        }
    return arr;
}