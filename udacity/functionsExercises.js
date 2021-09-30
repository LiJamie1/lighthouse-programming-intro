/* laugh function 1 - function exercise
function laugh() {
  var laughing = "hahahahahahahahahaha!";
  return laughing;
}
console.log(laugh());
*/
/* laugh function 2 - function with loop exercise
var laughing = ""
function laugh(num) {
  for (var x = 0; x < num; x++) {
    laughing = laughing + "ha";
  }
  laughing = laughing + "!";
  return laughing
}

console.log(laugh(3));
*/

/* laugh function 3 - function expression with loop exercise
let sound = "";
var laugh = function (num) {
  for (x = 0; x < num;x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
};
console.log(laugh(10));
*/

/* make a triangle - using a function in a function
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  var lineNum = 1;
  for (lineNum = 1; lineNum <= length; lineNum++) {
    triangle = triangle + makeLine(lineNum);
  }
  return triangle;
}

console.log(buildTriangle(3));
*/

/* inline functions
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) {
  let sound = "";
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});
*/

/* cry - function expression

var cry = function crying() {
  let sound = "boohoo!"
  return sound
}
console.log(cry())
*/