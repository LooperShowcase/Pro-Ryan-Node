console.log("poatao");
let Name = "Ryan";
let Age = "14";
let Emoji = "👍";
console.log(Name);
console.log(Age);
console.log(Emoji);
const fs = require("fs");
let data = fs.readFilesSync("db.json");
let users = JSON.parse(data);

console.log(users);

function MakePerson(id, name, city) {
  users[id] = {
    name,
    city,
  };
}

MakePerson(1, "Person1", "NOT AMERICA  ");
MakePerson(2, " Person2", "AGAIN NOT AMERICA");
console.log(users);
