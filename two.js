function schet() {
  let floors = parseInt(
    prompt(`Количество этажей:`, (Math.random() * 100) | 0),
    10
  ); //  кол-во этажей
  let porches = parseInt(
    prompt(`Количество подъездов:`, (Math.random() * 100) | 0),
    10
  ); // число подъездов
  let apartments = parseInt(
    prompt(`Число квартир на этаже`, (Math.random() * 100) | 0),
    10
  ); // квартир на этаж
  let apartment = parseInt(
    prompt(`Номер квартиры`, (Math.random() * 100) | 0),
    10
  );
  let floor = Math.ceil(apartment / apartments); // подъезд дома.
  let porch = Math.ceil(floor / floors); // этаж подъезда
  floor -= (porch - 1) * floors;
  alert(`Квартира № ${apartment} находится в подъезде ${porch} на ${floor} этаже`);
}
schet();
