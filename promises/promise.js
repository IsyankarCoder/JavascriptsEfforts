/*
 The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.
*/

function MyDisplayer(value) {
    document.getElementById("demo").innerHTML = value;
}


let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve("X değeri 0");
    }
    else {
        myReject("X değeri 0 dan farklı");
    }
});

myPromise.then(
    function (value) {
        MyDisplayer(value);
    },
    function (error) {
        MyDisplayer(error);
    }
);