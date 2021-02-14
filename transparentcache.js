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

function slow(x) {
    sleep(2000);
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorarator(func) {
    let cache = new Map();
    return function (deg) {
        if (cache.has(deg)) {
            return cache.get(deg);
        }
        let result = func(deg);
        cache.set(deg, result);
        return result;
    }

}

var a = cachingDecorarator(slow)(5);
 


 