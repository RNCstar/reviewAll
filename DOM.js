// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections
document.getElementById("lbl");
document.getElementsByTagName("p")[0];
document.getElementsByClassName("text1");
document.querySelectorAll("p.hi");
document.forms["form1"]; // this some of the elements in  form
// ----------------------------------------------------------------
// animations in DOM elements

function test() {
  var elem = document.getElementById("box");
  var pos = 0;
  var id = null;
  clearInterval(id);
  id = setInterval(() => {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }, 5);
}
// ----------------------------------------------------------------
var parent = document.getElementById("tstchild");
var newChild = document.createElement("p");
var nod = document.createTextNode("hi ");
newChild.appendChild(nod);
parent.appendChild(newChild);
// ----------------------------------------------------------------------







