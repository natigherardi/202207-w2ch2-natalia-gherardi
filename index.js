const strictEquals = function (a, b) {
  let result = Object.is(a, b);
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return (result = false);
  } else if (!a && !b) {
    result = true;
  }
  return result;
};
console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
