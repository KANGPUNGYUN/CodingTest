function solution(id_pw, db) {
    let flat = db.flat();
    let sum = 0
    for(let i=0; i < flat.length; i++){
        if(flat[i] === id_pw[0]){
            
         if(flat[i+1] === id_pw[1]){
             return "login";
         }
            return "wrong pw";
        }
    }

    return "fail";
}