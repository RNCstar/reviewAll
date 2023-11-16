// for
for (var i = 0; i < 4; i++) {
  //   alert(i);
}

// loop for in
// The JavaScript for in statement loops through the properties of an Object

const person = {
  reza: "babadi",
  ali: "aslani",
  amir: "lashi",
};
var x;
for (x in person) {
  //   document.getElementById("lbl").innerHTML += person[x] + " ";
}

// ---------------------------------------------------------------------------
// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

var j;
var txt = "";
for (j of person) {
  txt += j;
}
// document.getElementById("lbl").innerHTML = txt;
