function solution(a, b, c, d) {
    if(a===b && b===c && c===d){
        return a*1111
    }
    else if(a!==b && b!==c && c!==d && d!==a && a!==c && b!==d){
        return Math.min(a,b,c,d)
    }
    else if(a===b && b===c && c!==d){
        let arr = [a,b,c,d].sort((a,b)=>a-b);
        if(arr[0] === arr[1] && arr[1] === arr[2]){
            return ((10*arr[0])+arr[3])*((10*arr[0])+arr[3])
        }else if(arr[1] === arr[2] && arr[2] === arr[3]){
            return ((10*arr[3])+arr[0])*((10*arr[3])+arr[0])
        }
        else{
            return ((10*arr[1])+arr[0])*((10*arr[1])+arr[0])
        }
    }else if(a===b && b===d && c!==d){
        let arr = [a,b,c,d].sort((a,b)=>a-b);
        if(arr[0] === arr[1] && arr[1] === arr[2]){
            return ((10*arr[0])+arr[3])*((10*arr[0])+arr[3])
        }else if(arr[1] === arr[2] && arr[2] === arr[3]){
            return ((10*arr[3])+arr[0])*((10*arr[3])+arr[0])
        }else{
            return ((10*arr[1])+arr[0])*((10*arr[1])+arr[0])
        }
    }else if(a===c && c===d && c!==b){
        let arr = [a,b,c,d].sort((a,b)=>a-b);
        if(arr[0] === arr[1] && arr[1] === arr[2]){
            return ((10*arr[0])+arr[3])*((10*arr[0])+arr[3])
        }else if(arr[1] === arr[2] && arr[2] === arr[3]){
            return ((10*arr[3])+arr[0])*((10*arr[3])+arr[0])
        }else{
            return ((10*arr[1])+arr[0])*((10*arr[1])+arr[0])
        }
    }else if(b===c && c===d && c!==a){
        let arr = [a,b,c,d].sort((a,b)=>a-b);
        if(arr[0] === arr[1] && arr[1] === arr[2]){
            return ((10*arr[0])+arr[3])*((10*arr[0])+arr[3])
        }else if(arr[1] === arr[2] && arr[2] === arr[3]){
            return ((10*arr[3])+arr[0])*((10*arr[3])+arr[0])
        }else{
            return ((10*arr[0])+arr[1])*((10*arr[0])+arr[1])
        }
    }
    else{
        let arr = [a,b,c,d].sort((a,b)=>a-b);
        if(arr[0] === arr[1]&&arr[2] === arr[3]){
            return (arr[0] + arr[2])*Math.abs(arr[0] - arr[2])
        }else{
            if(arr[0] === arr[1]){
                return arr[2]*arr[3]
            }else if(arr[1] === arr[2]){
                return arr[0]*arr[3]
            }else if(arr[2] === arr[3]){
                return arr[0]*arr[1]
            }
        }
    }
}