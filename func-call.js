function sleep(milisecond)
{
    const date = Date.now();
    console.log(date);
    let currentDate = null;
    do {
        currentDate = Date.now();

    } while (currentDate - date < milisecond);
    console.log(currentDate);

}

//we will make worker.slow caching
let worker = {
    someMethod() {
        return 1;
    },
    slow(min,max) {
        //scary cpu heavy task here
        sleep(5000)
        console.log(`Called with ${min},${max}`);
        return min + max;
    },
    a: function () {
        
    },
    b: 55

};

//same code as before
function cachingDecorarator(fun,hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
    
        let result = fun.call(this, ...arguments); //func.apply(this, arguments);
        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + "," + args[1];
}
 

worker.slow = cachingDecorarator(worker.slow, hash);
console.log(worker.slow(2,5));
console.log(worker.slow(2,5));
