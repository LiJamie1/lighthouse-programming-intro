let output = ""

function ageCalculator (name, birthYear, currentYear){
  var age = currentYear - birthYear
  //console.log(age)
  //console.log(name)
  output = `${name} is ${age} years old.`
  return output
}

console.log(ageCalculator("Jamie", 1998, 2021))
ageCalculator("Jamie", 1998, 2021)