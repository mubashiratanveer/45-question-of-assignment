"use strict";
let Guest_list = ["Bareera", "Noor fatima", "Anamta"];
Guest_list.forEach(Guest_list => {
    console.log(`Aoa: Dear ${Guest_list} would you like to join me for dinner?`);
});
console.log(`unfortunatily ${Guest_list[2]} can't come to dinner.`);
console.log("New invitation list");
Guest_list[2] = "Samaviya";
Guest_list.forEach(Guest_list => {
    console.log(`Aoa: Dear ${Guest_list} would you like to join me for dinner?`);
});
