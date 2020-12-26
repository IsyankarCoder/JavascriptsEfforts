var passed = 3;
var addTo = function () {
    var inner = 2;
    return passed + inner;
     
}
console.log(addTo());
var passed = 4;

console.log(addTo());


var addToNew = function (passed3) {
    var add = function (inner) {
        return passed3 + inner;
    }
    return add;
}
 

var three = new addToNew(3);
console.log("ddd", three(2));

var four = new addToNew(4);
console.log("ddd", four(2));


var newFunc = function (obj) {
    return function (obj2) {
        return function (obj3) {
            return obj + obj2 + obj3;
        }
    }
}

console.log(newFunc(4)(2)(1));
console.log(newFunc(1)(3)(5));