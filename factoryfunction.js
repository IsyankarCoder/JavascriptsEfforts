var factory = function (num) {
    var createdObject = new Object();
        createdObject.id = 1,
        createdObject.name = '2',
        createdObject.num = num
    
    return createdObject;
}
var factory2 = function (num) {
    return {
        id: 2,
        num: num,
        name: 'volkan',
        sayFunc: () => { return "Hello" },
        sayFunc2: function () {
            return "Hello2";
        }
    };
}

console.log(factory(15));
console.log(factory2(43));
console.log(factory2(43).sayFunc2());