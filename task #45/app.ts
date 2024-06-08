function car(manufactures:string, model:number,...rest:{[key:string]:any}[]){
let car_obj={
    manufactures:manufactures,
    model:model,
    ...Object.assign({},...rest)
}
return car_obj
}
let ans1= car("honda",2023);
console.log(ans1);

let ans2=car("toyota",2024,{color:"black"},{optional_features:["power window","air bag"]})
console.log(ans2);
