var u =(function () {
    function User(name) { 
        this.name += name;
    }
    User.prototype.sayHi = function(){
        console.log("Selam Bebişim", this.name);
    }

    return User;
})();



let user = new u("Volkan");
user.sayHi();



let userByClass = class MyClass {
    sayHi() {
        console.log("Söyle bieişim");
    }

}

new userByClass().sayHi();


//dynamically make class on-demand
function MakeClass(obj) {
    return class {
        sayHi() {
            console.log("Dinamik oluştum bebişim = ", obj);
        }
    }
}
let dynaUser = MakeClass("Volkan");
new dynaUser().sayHi();



class getClass{
    constructor(name) {
        this.name = name;
    }

    //computed column
    ['say + Hi']() {
        console.log("Hello");
    }

    sayHello = function (ong) {
        console.log(`Hello, ${ong} , ${this.name}`);
    }

    get name(){
        return this._name;
    }    
    set name(value) {
        if (value.length < 4) {
            console.log("Kısan");
            return;
        }
        this._name = value;
    }
}

let ml = new getClass("Volkan GENÇ");

console.log(ml.name);

ml.name = "";
ml["say + Hi"]();
ml.sayHello("tjj");


class Button
{
     
    constructor(value) {
        this.value = value;
        this.name2 = value;
    }

    click() {
        console.log(`Hello,  ${this.value},${this.name2}`);
    }
    
}

let btn = new Button(55); 
btn.name2 = "gg";
setTimeout(() => btn.click, 100);
