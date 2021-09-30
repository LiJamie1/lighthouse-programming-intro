/* which school
const whichSchool = function (age){
  if (age <= 12){
    console.log("Elementary School");
    return "Elementary School"
  } else if (age >= 13 && age <= 18){
    console.log("Secondary School");
    return "Secondary School"
  } else {
    console.log("Lighthouse Labs");
    return "Lighthouse Labs"
  }
};

whichSchool(0)
*/

/* lift off - while loop
while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power")
  } else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start")
  } else if (x === 16) {
    console.log("Activate launch pad sound suppression system")
  } else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system")
  } else if (x === 6) {
    console.log("Main engine start")
  } else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!")
  } else {
    console.log('T-' + x + ' seconds')
  } x = x - 1
}
*/

/* JuliaJames - while loop
var x = 1
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
    // Prints JuliaJames if x divisible by 3 and 5. If not first 15 prints only Julia or James and not JuliaJames
  } else if (x % 5 === 0) {
    console.log("James") // prints james
  } else if (x % 3 === 0) {
    console.log("Julia") // prints julia
  } else {
    console.log(x) // prints x as number
  }
  x = x + 1 // x increment
}
*/
/* fix loop
for (var x = 5; x < 10; x++) {
  console.log(x)
}
*/
/* find seat
for (var x = 0; x < 26; x++) {
  for (var y = 0; y < 100; y++) {
    console.log(x + '-' + y)
  }
}
*/
/* factorials
let solution = 1
for (var i = 1; i <= 12; i++) {
  solution *= i
}
console.log(solution)
*/
/* change loop
for (var x = 9; x >= 1; x--) {
  console.log("hello " + x)
}
*/

/* 99 bottles
var num = 99
while (num >= 1) {
  if (num === 1) {
    console.log(num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!')
  }
  else if (num === 2) {
    console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottle of juice on the wall!')
  }
  else {
    console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ' + (num - 1) + ' bottles of juice on the wall!')
  }
  num = num - 1
}
*/