function sayHi() {
    console.log("Slm");
}
console.log(sayHi.name);

let sayHi2 = function () {
    console.log("slm");
}

console.log(sayHi2.name);


function f(sayHi3 = function () { console.log("55"); }) {
    console.log(sayHi3.name);
    sayHi3();
}

f();


let user = {
    sayHi() {
        console.log("volkajn");
    },
    sayBye: function () {
        console.log("tolkan");
    },
    say: "ttt"

}

console.log(user.say);
console.log(user.sayHi.name);
console.log(user.sayBye.name);
 


function ask(question, ...handlers) {
    let isYes = console.log(question);
    for (let handler of handlers) {
        if (handler.lentgh == 0) {
            if (isYes)
                handler();
            
        } else {
            handler(isYes);
        }
    }
}


ask("Question?", () => { console.log("You said yes"), result => { console.log(result) } });

 