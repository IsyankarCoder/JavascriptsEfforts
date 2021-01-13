let user = {
    firstName: 'Volan'
}

function sayHello(obk) {
    console.log("ss", this.firstName,obk);
}

let funcUser = sayHello.bind(user);
funcUser("genç");


let user2 = {
    firstName: 'Volkan Tolkan',
    sayHi() {
        console.log("hello için ", this.firstName);
    }

};

let ss = user2.sayHi.bind(user2);
ss();

setTimeout(ss, 1000);

 user2 = {
    sayHi() {
        console.log("2. müzük");
    }
}


function mul(a, b) {
    return a * b;
}


let ob = mul.bind(null, 3);
console.log(ob(2));

let triple = mul.bind(null, 4);
console.log(triple(4));

