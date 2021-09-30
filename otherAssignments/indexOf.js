//let y = 0; not necessary

function lastIndexOf(array, lastVal) {
  let x = array.length;
  /*if (x === 0) {
    // y = -1; not necessary can just return -1
    // return -1;
  }*/
  //else {
    for (let i = x; i >= 0; i--) {
      if (array[i - 1] === lastVal) {
        //y = i - 1; not necessary can just return i-1
        return i-1;
      }
    }
    //y= -1; not necessary can just return -1
    return -1;
  }
//}
// initial if else block was an extra step. If it went through the for loop and didnt find anything i would just passed to -1 anyways.

console.log(lastIndexOf([1,2,3,4,5,6], 7))