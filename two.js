function sequence(start = 0, step = 1) {
  start -= step; // -1
  return function() {
    return start += step;
  };
}
var generator = sequence(10, 3);
alert(generator()); // 10
alert(generator()); // 13
alert(generator()); // 16
var generatorMain = sequence();
alert(generatorMain()); // 0
alert(generatorMain()); // 1
alert(generatorMain()); // 2
