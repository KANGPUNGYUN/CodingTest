function solution(p) {
    if (p === '') return '';
    
    let open = 0;
    let close = 0;
    let u = '';
    let v = '';
    
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            open++;
        } else {
            close++;
        }
        
        if (open === close) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1);
            break;
        }
    }
    
    if(isCorrect(u)){
        return u + solution(v)
    }else{
        let result = '(';
        
        result += solution(v);
        
        result += ')';
        
        u = u.slice(1, u.length - 1);
        for (let i = 0; i < u.length; i++) {
            result += u[i] === '(' ? ')' : '(';
        }
        
        return result;
    }
}

function isCorrect(str){
    let stack = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack++;
        } else {
            if (stack === 0) {
                return false;
            }
            stack--;
        }
    }
    return stack === 0;
}