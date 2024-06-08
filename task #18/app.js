"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//store the location in a array. Make sure the  array  is not in alphabetical order.
let Fav_places = ["khany kaba ", "Madina", "Sawat", "Marih", "Dubai"];
//print your array in its orignal order.
console.log(Fav_places);
//print  your array in alphabetical order without modifying the actual list
console.log("Alphabetical order: " + [...Fav_places].sort() + "\n");
//show that your array is still in its orignal order by printing it.
console.log(" orignal order:" + Fav_places + "\n");
//print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabrtical order: " + [...Fav_places].sort().reverse() + "\n");
// show that your array is still in its original order by printing it again .
console.log("original order:  " + Fav_places + "\n");
// Reverse the order of your list.print the array to show that its order has changed.
console.log("Reverse the order: " + Fav_places.reverse() + "\n");
// Reverse the order of your list again. Print the list to show it's back to its original order.
console.log("original order: " + Fav_places.reverse() + "\n");
// sort your array so it's stored in alphabetical order . print the array to show that
// its order has been changed
console.log("alphabetical order: " + Fav_places.sort() + "\n");
//sort to change your array so it's stored in reverse alphabetical order. print the list to show that
// it's order has change
console.log("reverse alphabetical order: " + Fav_places.sort().reverse() + "\n");
