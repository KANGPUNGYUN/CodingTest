function solution(sizes) {
    sizes = sizes.map((v)=>{
        if(v[0]>v[1]){
            let temp = v[0];
            v[0] = v[1];
            v[1] = temp;
        }
        return v
    })
    
    let width = Math.max(...sizes.map((v)=>v[0]))
    let height = Math.max(...sizes.map((v)=>v[1]))
    
    return width*height
}