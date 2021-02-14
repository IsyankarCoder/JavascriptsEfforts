function hash() {
    var result = ([].join.call(arguments));
    console.log(result);
}
 
var arr = [2,23,8855];
hash(arr);

 