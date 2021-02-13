let user = {
    firstName: 'volkan',
    sayHi: function () {
        console.log("Seleam bebişim", this.firstName);
    }
};
setTimeout(function () {
    user.sayHi(); 
});

setTimeout(() => { user.sayHi(); }, 10000);


user = {
    sayHi() {
        console.log("naber datlum");
    }
}