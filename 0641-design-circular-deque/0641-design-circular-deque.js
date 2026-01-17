/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue = []
    this.maxLength = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    // unshift
    if(this.queue.length < this.maxLength) {
        this.queue.unshift(value)
        return true
    }

    return false
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    // push
    if(this.queue.length < this.maxLength) {
        this.queue.push(value)
        return true
    }

    return false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    // shift
    if(this.queue.length) {
        this.queue.shift()
        return true
    }

    return false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    // pop
    if(this.queue.length) {
        this.queue.pop()
        return true
    }

    return false
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.queue[0] ?? -1
    
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.queue[this.queue.length - 1] ?? -1
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.maxLength
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */