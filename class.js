var u =(function () {
    function User(name) {
        function User() {
        
        }
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

