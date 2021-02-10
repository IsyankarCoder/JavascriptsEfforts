let sayHi = new Function('a', 'b', "console.log(a,b)");
sayHi(1, 3);


let str = "console.log('volki tolki')";
let hi = new Function(str);
hi();