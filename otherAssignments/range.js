function range(start, end, step) {
  let rangeOrder = []
  if (typeof start === 'number' && typeof end === "number" && typeof step === 'number' && start < end && step >= 1) {
    let i = start;
    while (i <= end) {
      rangeOrder.push(i);
      i += step
    }
    return rangeOrder
  } else {
    return rangeOrder
  }
}

console.log(range(-9, 3, 3))


/*for (let i = start; i < end; i += step){
  rangeOrder.push(i)
  return rangeOrder
}*/

// increment properly next time i+step does nothing, do i+= next time