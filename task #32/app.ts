let current_users:string[]=["Wasy","Ahmed","Aliyan","Aziyan","Ayan"];
let new_users:string[]=["sufiyan","wasy","ahmed","sarim","abdullah"];

let lowercase=[]
for (let i=0; i<current_users.length; i++){
  lowercase.push  (current_users[i].toLowerCase())
}
for (let i=0; i<new_users.length; i++){
    if(lowercase.includes(new_users[i])){
        console.log(`${new_users[i]} will need to enter a new username. `)
    }else {
        console.log(`${new_users[i]} is available`)
    }
}