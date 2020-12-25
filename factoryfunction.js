var factory = function (num) {
    var createdObject = new Object();
        createdObject.id = 1,
        createdObject.name = '2',
        createdObject.num = num
    
    return createdObject;
}
var factory2 = function (num) {
    return {
        id:2,
        num:num,
        name:'volkan'
    };
}

console.log(factory(15));
console.log(factory2(43));