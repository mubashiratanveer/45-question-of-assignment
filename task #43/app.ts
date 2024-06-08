let magician_array: string[] = ["magician_1", "magician_2", "magician_3"];

function copy_array(arr:string[]){
    return [...arr]
}
let array_copy=(copy_array(magician_array));
 
function make_great(arr:string[]){
    for(let i=0; i<arr.length; i++){
        array_copy[i]= `great ${arr[i]}`
    }
}
make_great(array_copy)

function show_magician(arr:string[]){
    return arr
}
console.log("original array",show_magician(magician_array));
console.log("modified array", show_magician(array_copy));