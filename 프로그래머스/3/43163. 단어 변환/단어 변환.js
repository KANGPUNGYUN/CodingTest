function solution(begin, target, words) {
    if(!words.includes(target)){
        return 0
    }
    
    class Queue {
        constructor(){
            this.items = [];
        }
        
        enqueue(element){
            this.items.push(element);
        }
        
        dequeue(){
            return this.items.shift();
        }
        
        isEmpty(){
            return this.items.length === 0
        }
    }
    
    const queue = new Queue();
    queue.enqueue([begin, 0]);
    
    const visited = new Set([begin]);
    
    function canTransform(word1, word2){
        let count = 0;
        for(let i=0; i<word1.length; i++){
            if(word1[i] !== word2[i]){
                count++
            }
            if (count > 1) return false;
        }
        return count === 1
    }
    
    while(!queue.isEmpty()){
        const [curWord, depth] = queue.dequeue();
        
        if(curWord === target){
            return depth
        }
        
        for(const word of words){
            if (visited.has(word)) {
                continue;
            }
            
            if (canTransform(curWord, word)) {
                queue.enqueue([word, depth + 1]);
                visited.add(word);
            }
        }
    }
}