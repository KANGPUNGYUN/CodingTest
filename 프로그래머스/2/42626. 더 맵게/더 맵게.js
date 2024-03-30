function solution(scoville, K) {
    let answer = 0;
    
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        size() {
            return this.heap.length;
        }

        isEmpty() {
            return this.size() === 0;
        }

        peek() {
            if (this.isEmpty()) {
                return null;
            }
            return this.heap[0];
        }

        push(value) {
            this.heap.push(value);
            this.bubbleUp(this.size() - 1);
        }

        pop() {
            if (this.isEmpty()) {
                return null;
            }

            const minValue = this.peek();
            const lastValue = this.heap.pop();
            if (!this.isEmpty()) {
                this.heap[0] = lastValue;
                this.bubbleDown(0);
            }
            return minValue;
        }

        bubbleUp(index) {
            let currentIdx = index;
            while (currentIdx > 0) {
                const parentIdx = Math.floor((currentIdx - 1) / 2);
                if (this.heap[parentIdx] <= this.heap[currentIdx]) {
                    break;
                }
                this.swap(parentIdx, currentIdx);
                currentIdx = parentIdx;
            }
        }

        bubbleDown(index) {
            let currentIdx = index;
            while (true) {
                let leftChildIdx = currentIdx * 2 + 1;
                let rightChildIdx = currentIdx * 2 + 2;
                let smallest = currentIdx;

                if (leftChildIdx < this.size() && this.heap[leftChildIdx] < this.heap[smallest]) {
                    smallest = leftChildIdx;
                }
                if (rightChildIdx < this.size() && this.heap[rightChildIdx] < this.heap[smallest]) {
                    smallest = rightChildIdx;
                }
                if (smallest !== currentIdx) {
                    this.swap(currentIdx, smallest);
                    currentIdx = smallest;
                } else {
                    break;
                }
            }
        }

        swap(idx1, idx2) {
            [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
        }
    }
    
    const heap = new MinHeap();
    scoville.forEach(value => heap.push(value));

    while (heap.size() > 1 && heap.peek() < K) {
        const min1 = heap.pop();
        const min2 = heap.pop();
        const mixed = min1 + min2 * 2;
        heap.push(mixed);
        answer++;
    }
    
    if (heap.peek() < K) {
        return -1;
    }

    return answer;
}