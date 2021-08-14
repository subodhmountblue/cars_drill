let BMWAndAudi = [];
let i;
for (i = 0; i < inventory.length; i++) {
  if (inventory[i].car_make === "Audi" || inventory[i].car_make === "BMW") {
    BMWAndAudi.push(inventory[i]);
  }
}
console.log(BMWAndAudi);