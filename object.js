let user = { name: "Volkan" };
let admin = { name: "Genç" };


function sayHi() {
    console.log("Slm " + this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

user["f"]();

for (var key in user) {
    if (typeof user[key] == "function") {
        user[key]();   
    } else {
        console.log(user[key]);
    }
}



function BigUser() {
    this.name = "tt";
    return { name: "aa" };
}

console.log(new BigUser().name);


let user2 = {};
console.log(user2.adress ? user2.adress : undefined);
 

let id = Symbol("id");
user2[id] = 1;
console.log(user2[id]);
