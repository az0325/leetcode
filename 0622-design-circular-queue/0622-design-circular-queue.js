/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k)
    this.maxLength = k
    this.front = 0 // deQueue
    this.rear = 0 // enQueue
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // 값이 없으면 값을 넣어줌
    if(this.queue[this.rear] === undefined) {
        this.queue[this.rear] = value

        // this.rear가 배열의 최대 길이를 벗어나지 않게 이동
        this.rear = (this.rear + 1) % this.maxLength

        return true
    }

    return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.queue[this.front] === undefined){
        return false
    }
    
    // 값 초기화
    this.queue[this.front] = undefined

    // this.front가 배열의 최대 길이를 벗어나지 않게 이동
    this.front = (this.front + 1) % this.maxLength

    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.queue[this.front] ?? -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    const index = (this.rear - 1 + this.maxLength) % this.maxLength
    return this.queue[index] ?? -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.rear === this.front && Boolean(this.queue[this.front] === undefined)
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.rear === this.front && Boolean(this.queue[this.front] !== undefined)
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */