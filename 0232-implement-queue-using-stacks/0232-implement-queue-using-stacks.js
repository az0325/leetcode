
var MyQueue = function() {
    this.input = []
    this.output = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // 요소 x를 큐 마지막에 삽입
    this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 큐가 처음에 있는 요소 제거
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }

    return this.output.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 큐 처음에 있는 요소 조회
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }

    return this.output[this.output.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 큐가 비어있는지 확인
    return this.input.length + this.output.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */