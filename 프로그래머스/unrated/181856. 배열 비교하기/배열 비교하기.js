function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        if(arr1.reduce((acc, cur) => acc+cur,0)===arr2.reduce((acc, cur) => acc+cur,0)){
            return 0
        }else if(arr1.reduce((acc, cur) => acc+cur,0)>arr2.reduce((acc, cur) => acc+cur,0)){
            return 1
        }else{
            return -1
        }
        
    }else if(arr1.length > arr2.length){
        return 1
    }else{
        return -1
    }
}