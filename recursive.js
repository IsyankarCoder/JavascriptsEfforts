var sum = 0;

function f(number) { 
    if (number > 0)
    {
        sum += number;        
        return f(number - 1);
    }
    else {
        console.log("Exiter");
        return sum;
    }
}

var a = f(13);
console.log(a);


function sumOfDigits(num) {
    if (num == 0)
        return 0;
    else
        return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(324));
