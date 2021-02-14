function sleep(milisecond)
{
    const date = Date.now();
    console.log(date);
    let currentDate = null;
    do {
        currentDate = Date.now();

    } while (currentDate - date < milisecond);
    console.log(currentDate);

}

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