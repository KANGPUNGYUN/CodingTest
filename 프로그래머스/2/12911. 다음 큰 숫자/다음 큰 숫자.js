function solution(n) {
    let binary = n.toString(2);
    let totalBinarySum = binary.split("").reduce((acc, cur)=>Number(acc)+Number(cur), 0);
    
    let nextNum = n + 1;
    
    while (true) {

        let nextBinary = nextNum.toString(2);
        let nextCountOnes = nextBinary.split("").reduce((acc, cur)=>Number(acc)+Number(cur), 0);
        
        if (totalBinarySum === nextCountOnes) {
            return nextNum;
        }
        
        nextNum++;
    }
}