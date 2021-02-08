function sayHi() {
    console.log("Hi");
    sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
sayHi();

console.log("Increment : ", sayHi.counter);

//Closure

function makeCounter() {
    //instead of
    // let count=0
    function counter() {
        return counter.count++;
    }

    counter.count = 0;
    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
counter.count = 55;
console.log(counter());

