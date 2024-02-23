function solution(number, limit, power) {
    let res = 0;
        
    for(let i=1;i<=number;i++){
        let cnt = 0;
        for(let j=1;j*j<=i;j++){
                if(j*j==i) cnt++;
                else if(i%j==0) cnt+=2;
        }
        if(cnt>limit) cnt = power;
        res += cnt;
    }

    return res;
}