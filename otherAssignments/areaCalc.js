function calculateRectangleArea(a, b) {
  if (a <= 0 || b <= 0) {
    return undefined;
  } else {
    var rectArea = a * b;
    return rectArea;
  }
}
function calculateTriangleArea(c, d) {
  if (c <= 0 || d <= 0) {
    return undefined;
  } else {
    var triangArea = (c * d) / 2;
    return triangArea;
  }
}
function calculateCircleArea(e) {
  if (e <= 0) {
    return undefined;
  } else {
    var circArea = Math.PI * (e * e);
    return circArea;
  }
}

console.log(calculateRectangleArea(5, 10));
console.log(calculateTriangleArea(5,10));
console.log(calculateCircleArea(5));

