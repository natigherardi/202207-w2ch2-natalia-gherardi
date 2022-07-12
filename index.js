const strictEquals = function (a, b) {
  let result = Object.is(a, b);
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return (result = false);
  } else if (!a && !b) {
    result = true;
  }
  return result;
};
