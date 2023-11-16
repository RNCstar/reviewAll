// if  | else
function test() {
  var test1 = 12;
  var test2 = 23;
  if (test1 > test2) {
    alert("test1 > test2");
  } else {
    alert("wrong");
  }
}

// switch
var x = 4;
var rst = "";
switch (x) {
  case 1:
    rst = "not ok";
    break;
  case 2:
    rst = "not ok";
    break;
  case 3:
    rst = "not ok";
    break;
  case 4:
    rst = " ok";
    break;
}
document.getElementById("lbl").innerHTML = rst;