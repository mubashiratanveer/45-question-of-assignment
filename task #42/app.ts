let magician_array: string[] = ["magician_1", "magician_2", "magician_3"];
function make_great(array: String[]) {
  for (let i = 0; i < array.length; i++) {
    magician_array[i] = "The great " + array[i];
  }
}
make_great(magician_array);
console.log(magician_array);
