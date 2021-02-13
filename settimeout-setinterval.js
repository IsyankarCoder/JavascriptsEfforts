/*function printNumbers(from, to) {
    let timerID = setInterval(() => { 
        console.log(from++);
        if (from > to) {
            clearInterval(timerID);
        }
    }, 100);
}

printNumbers(0, 20);*/


/*function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);*/
  
function printNumbersSetInterVal(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current < to)
            setTimeout(go, 10000);
        current++;
    };
    go(); 
}

printNumbersSetInterVal(1, 10);

