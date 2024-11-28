/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

 const f = createHelloWorld();
//  f(); // "Hello World"
console.log(f({'name': 'me'},12,"hello world"))