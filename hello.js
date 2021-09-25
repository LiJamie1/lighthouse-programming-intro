//code example 1
/*
const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();*/

//code example 2
const sayHello = function (name) {
  console.log("Hello, " + name);
}
sayHello("Kevin");
sayHello("Jamie");
sayHello("James");

/* return vs console.log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
//returns output to the console
*/


/*const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
//does not return an output to console
*/