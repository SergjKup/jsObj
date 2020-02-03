let salaries = {
  John: 100,
  Ahn: 160,
  Pete: 130
}; // Создаем объект

function howMach(salaries) {
  let sum = 0; // Объявляем переменную sum  с нулевым значением
  for (let id in salaries) {
    sum = sum + salaries[id];
  } //for последовательно переберает свойства объекта salaries, имя каждого свойства записывается в id и вызвается тело цикла.
  return sum;
}
console.log(howMach(salaries));
alert(howMach(salaries));
