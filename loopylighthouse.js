/* loopylighthouse 1
for (var x = 100; x <= 200; x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log('LoopyLighthouse')
  } else if (x % 4 === 0) {
    console.log('Lighthouse')
  } else if (x % 3 === 0) {
    console.log('Loopy')
  } else {
    console.log(x)
  }
}
*/

//loopylighthouse 2
function loopyLighthouse(range, multiples, words) {
  let y = multiples[0] * multiples[1]
  for (var i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
