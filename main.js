// Your code here.
function setFirstName(person, value) {
  person.firstName = value;
}

function giveBirthday(user) {
  if (user["age"] === undefined) {
    user["age"] = 1;
  } else {
    user["age"] += 1;
  }
}

function marry(a, b) {
  a.married = true;
  b.married = true;
  a.spouseName = b.firstName + " " + b.lastName;
  b.spouseName = a.firstName + " " + a.lastName;
}

function divorce(person, person2Divorced) {
  person.married = false;
  person2Divorced.married = false;
  delete person.spouseName;
  delete person2Divorced.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
