"use strict";
let Guest_list = ["Bareera", "Noor fatima", "Anamta"];
console.log("Good news! we've found a bigger dinner table, so more space is available. so our new guests are: \n");
Guest_list.unshift("Warda");
Guest_list.splice(2, 0, "samaviya");
Guest_list.push("Fabiha");
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} \n  you are invited to dinner !\n`);
}
