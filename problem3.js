let carModels = [];
for (let i = 0; i < inventory.length; i++) {
    carModels.push(inventory[i]["car_model"]);
  }
  console.log(carModels.sort());
  