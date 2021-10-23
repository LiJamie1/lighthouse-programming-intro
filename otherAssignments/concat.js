function concat(arrayOne, arrayTwo){
  let newArray = []
  if(arrayOne.length > 0 && arrayTwo.length > 0){
    newArray = arrayOne.concat(arrayTwo)
    console.log(newArray)
    return newArray
  } else if (arrayOne.length === 0) {
    return arrayTwo
  } else if (arrayTwo.length === 0) {
    return arrayOne
  } else {
    return newArray
  }
}

//console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))
//console.log(concat([], [ 9, 7, 2 ]))
//console.log(concat([],[]))

/* function merge(a1, a2){
  let a3 = []
  a3 = a1.concat(a2)
  a3.sort()
  return a3
}

console.log(merge([ 0, 3, 1 ], [ 9, 7, 2 ]))
console.log(merge([ 5, 6 ], [1]))
*/