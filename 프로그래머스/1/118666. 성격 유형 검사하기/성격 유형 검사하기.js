function solution(survey, choices) {
    let init = { R: 0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
    for(let i in survey){
        if(choices[i]>4){init[survey[i][1]] += choices[i]-4}
        else if(choices[i]<4){init[survey[i][0]] += 4 - choices[i]}
    }
    let res = ''
    if(init.R < init.T){
       res += 'T'
    }else{
       res += 'R'    
    }
    if(init.C < init.F){
       res += 'F'
    }else{
       res += 'C'    
    }
    if(init.J < init.M){
       res += 'M'
    }else{
       res += 'J'    
    }
    if(init.A < init.N){
       res += 'N'
    }else{
       res += 'A'    
    }
    return res
}