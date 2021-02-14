/*function sayHello(obj) {
    console.log(this.name + "-" + obj);
}

sayHello.sayOk = function () {
    console.log("Ok");
}

let user = { name: "volkan" };
sayHello.call(user, "hoş");
sayHello.sayOk();
*/

function work(...arg) {
    let sum = 0;
    for (let d of arg)
        sum += d;
    console.log(sum);
}

function spy(func) {
    function w(...args) {
        w.calls.push(args);
        return func.apply(this, args);
    }

    w.calls = [];
    return w;
}


w = spy(work);
w(1, 2, 4);
w(3, 5);

for (let arg of w.calls) {
    console.log(arg.join());
}

