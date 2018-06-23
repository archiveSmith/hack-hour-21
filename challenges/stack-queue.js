/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = [];
    this.pop = () => {
        if(this.stack.length > 0){
        return this.stack[this.stack.length - 1];
        } else{
            return undefined;
        }
    };
    this.push = (el) => {
        this.stack.concat(el);
    };

}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
