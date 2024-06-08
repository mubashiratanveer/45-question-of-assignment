"use strict";
let studentName = ["ahmed", "admin", "taha", "asad"];
while (studentName.length > 0) {
    studentName.pop();
}
console.log(studentName);
if (studentName.length === 0) {
    console.log("We need to find some users!");
}
