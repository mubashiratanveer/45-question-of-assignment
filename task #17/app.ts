let Guest_list=["Bareera","Noor fatima","Anamta"];

console.log("Good news! we've found a bigger dinner table, so more space is available. so our new guests are: \n")
 Guest_list.unshift("Warda");
 Guest_list.splice(2,0,"samaviya");
 Guest_list.push("Fabiha");

for(let i=0; i<Guest_list.length; i++) {
     console.log(`Dear ${Guest_list[i]} \n  you are invited to dinner !\n`);
    
 }
 console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner\n")
 while( Guest_list.length>2 ){
   let notInvited= Guest_list.pop()
   console.log(`Sorry, Due to limited space we can't invite you to dinner Miss. ${notInvited}`);
 }
 
 for(let i=0; i<Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} \n  you are  still invited to dinner !\n`);
   
}

Guest_list.pop()
Guest_list.pop()
console.log(Guest_list)