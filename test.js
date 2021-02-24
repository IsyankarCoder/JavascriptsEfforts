/*function hello(thing) { 
    console.log(this.name + " says hello " + thing);
  }
  
  person = { name: "Brendan Eich" }
  person.hello = hello;
  
  person.hello("world") // still desugars to person.hello.call(person, "world")
  person.hello.call(person, "world");
  hello("world")*/

var person = {
  name: "Volkan GEnç",
  hello: function (thing) {
    console.log(this.name + " say hello " +thing);
  }

}

/*var boundHello = function (thing) {
  return person.hello.call(person, thing);
}

boundHello("Hello");*/

var bind = function (func, thisValue) {
  return function () {
    return func.apply(thisValue, arguments);
  }
}

var boundHello = bind(person.hello, person);
boundHello("ww");

let a = person.hello.bind(person);
a("tt");