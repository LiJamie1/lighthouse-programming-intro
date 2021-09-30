const carPassing = function (cars, speed) {
  let time = Date.now() // use time instead of date to be consistent
  cars.push({ time , speed }) // instead of ({ time: date, speed: speed }), this can be shortened into ({time, date})
  // can be even further optimized by putting Date.now in the brackets {time: Date.now, speed}. this invalidates line 2, shortening by 1 line
  return cars
}