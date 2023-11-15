// OBJ  with
// constructor	Returns the function that created an object's prototype
// keys()	Returns an Array Iterator object with the keys of an object
// prototype	Let you to add properties and methods to JavaScript objects
// toString()	Converts an object to a string and returns the result
// valueOf()	Returns the primitive value of an object
function test() {
  var person = {
    fname: "raza",
    lname: "babadi",
    age: 23,
    salary: 5,
  };
  //   keys()
  //   var keys = Object.keys(person);


  document.getElementById("lbl").innerHTML = person;
}
