/* exercise 1 udaciFamily - making an array
let udaciFamily = ["Julia", "James", "Jamie"]
console.log(udaciFamily)
*/

/* exercise 2 building the crew - making an array with variables
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
let crew = [captain, second, pilot, companion, mercenary, mechanic]
console.log(crew)
*/

/* exercise 3 price is right - changing values in an array
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00]
prices[0]=20
prices[2]=20
prices[6]=20
console.log(prices)
*/

/* exercise 4 colours of the rainbow - splice method on arrays
// name.splice(element position, # of elements removed, elements adding)
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1,"Yellow", "Green")
rainbow.splice(5,0,"Purple")
console.log(rainbow)
*/

/* exercise 5 Quidditch Cup - using arrays in functions
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
  let teamTotal = team.length
  if (teamTotal >= 7) {
    return true
  } else {
    return false
  }
}

console.log(hasEnoughPlayers(team));
*/

/* exercise 6 joining the crew - push method to add to array
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
let crew = [captain, second, pilot, companion, mercenary, mechanic]
console.log(crew)
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd)
console.log(crew)
*/

/* exercise 7 another type of loop - for each loops
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(item, index){
  if (item%3===0){
    test[index]+=100
  }
})

console.log(test)
*/

/* exercise 8 i got bills - map method
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22]

var totals = bills.map(function(bills){
  bills *= 1.15;
  bills = bills.toFixed(2) // reduce to 2 d.p
  bills = Number(bills) // change to numbers
  return bills
});

console.log(totals)
*/

/*exercise 9 nested numbers - nested arrays
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r = 0; r < numbers.length; r++) 
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      numbers[r][c] = "even";
    } else {
      numbers[r][c] = "odd";
    }
  }

console.log(numbers);
*/