// A JavaScript function is a block of code designed to perform a particular task.

function sumNumbers(num1, num2) {
  var x = num1 + num2;
  return x;
}

function test() {
  document.getElementById("lbl").innerHTML = sumNumbers(1, 3);
}
