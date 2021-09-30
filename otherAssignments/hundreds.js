function howManyHundreds(num) {
  if (num >= 100) {
    var remainder = num % 100
    var hundreds = num - remainder
    var thisManyHundreds = hundreds / 100
    return thisManyHundreds
  } else {
    return 0
  }
}
console.log(howManyHundreds(99))