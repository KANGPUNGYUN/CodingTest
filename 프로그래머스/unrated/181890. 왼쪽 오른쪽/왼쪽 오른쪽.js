function solution(str_list) {
    for(let i=0; i<str_list.length; i++){
        if(str_list[i] === "r"){
            if(i===0){
                return str_list.slice(1, str_list.length);
            }
            return str_list.slice(i+1, str_list.length);
        }else if(str_list[i] === "l"){
            return str_list.slice(0,i);
        }
    }
    return [];
}