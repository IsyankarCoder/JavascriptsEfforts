let sayHi = function (who) {
    console.log(`Hello,${who}`);
}

sayHi("Volkan");


let sayHi2 = function func(who) {
    if (who)
        console.log(`Hello,${who}`);
    else
        func("Guest");
}

let welcome = sayHi2;
sayHi2 = null;
welcome("Volkan");
welcome();

// if we do like that it will give error

let sayHi3 = function (who) {
    if (who) {
        console.log(`Hello,${who}`);
    }
    else {
        sayHi3("Guest2");
    }
}

let welcome2 = sayHi3;
sayHi3 = null;

welcome2();