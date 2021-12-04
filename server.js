function q(word) {
  console.log(word);
}
function le(mutaghayer) {
  let(mutaghayer);
}

const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);

q(users);

function MakePerson(id, name, city) {
  users[id] = {
    name,
    city,
  };
}
function readUser(id) {
  return users[id];
}
MakePerson(1, "Person1", "NOT AMERICA  ");
MakePerson(2, " Person2", "AGAIN NOT AMERICA");
MakePerson(3, "Person3", "NOT AMERICA  ");
MakePerson(4, " Person4", "AGAIN NOT AMERICA");
MakePerson(5, "Person5", "NOT AMERICA  ");

q(users);

function BoomHeadshot(id) {
  delete users[id];
}

function RemakePerson(id, name, city) {
  if (users[id] == undefined) {
    return "Buddy, That person doesn't exist";
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}

RemakePerson(1, "RyanM", "PotatoLands");
q(users);

let dataToString = JSON.stringify(users);
fs.writeFileSync("db.json", dataToString);
