function sum(a) {
  let allSum = a;

  function fun(b) {
    allSum += b;
    return fun;
  }

  fun.toString = function() {
    return allSum;
  };

  return fun;
}
x = sum(1)(3)(6)(2)(6)(4);
alert(x); // 22
