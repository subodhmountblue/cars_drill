let oldCars = [];
let i;
for (i = 0; i < carYears.length; i++) {
  if (carYears[i] < 2000) {
    oldCars.push(carYears[i]);
  }
}
console.log(oldCars.length);