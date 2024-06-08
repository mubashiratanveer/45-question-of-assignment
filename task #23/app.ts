let car: string ='subaru'
console.log("----> 5 tests evalution to true:");
// Test 1:
console.log("Is car == 'subaru'? I predict True. ");
console.log(car === 'subaru' );

// Test 2:
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');
 
// Test 3:
console.log("Is the length of car > 4? I predict True .");
console.log(car.length > 4);

// Test 4:
console.log("Is the length of car <= 6 ? I predict True.");
console.log(car.length <= 6);

// Test 5:
console.log("Does car start with 's' ? I predict True.");
console.log(car.startsWith('s'));
 
// Test 6:
console.log("Is car == 'honday' ? I predict false. ")
console.log(car ==' honday' );
  
// Test 7:
console.log("Is car !== 'subaru'? I predict false.")
console.log(car !=='subaru' );
 
//Test 8:
console.log("Is the lenght of car < 4 ? I predict false.");
console.log(car.length < 4)

// Test 9:
console.log("Is car  stsrt with 'M' ? I predict false.")
console.log(car.startsWith('M'));

// Test 10:
console.log("Is the length of car <= 5? I predict false . ")
console.log(car.length <= 5);