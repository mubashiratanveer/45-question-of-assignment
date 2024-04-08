let Guest_list=["Bareera","Noor fatima","Anamta"];


console.log("New invitation list");

Guest_list[2]="Samaviya";
Guest_list.forEach(Guest_list=>{
    console.log(`Aoa: Dear ${Guest_list} would you like to join me for dinner?`);
});
console.log("Good news! We are found a bigger dinner table,So more space is avaiable.So our new guest are\n");
Guest_list.unshift("Maryam");
Guest_list.splice(2,0 ,"Muskan");
Guest_list.push("Rida");
Guest_list.forEach(Guest_list=>{
    console.log(`\n\t Aoa: Dear ${Guest_list} you are invited to dinner.\t\n`);
});