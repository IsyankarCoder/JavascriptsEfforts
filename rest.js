function sumAll(...params) {
    let sum = 0;

    for (let arg of params) {
        sum += arg;
        console.log(arg)
    }

    return sum;
}

console.log("sum1 : ",sumAll(3, 5));
console.log("sum2:",sumAll(4, 5, 6, 8, 9));


function showNames() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);


}

showNames("Volakn", "Genç");


function f() {
    let shwoArg = () => {
        console.log(arguments[0]);
    }

    shwoArg();
}
f(44);


let str = "Hello";
console.log(...str);
console.log([...str]);

console.log(Array.from(str));