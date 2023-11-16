// Throw, and Try...Catch...Finally
function test() {
  var myInput = document.getElementById("input_text").value;
  var rst = document.getElementById("lbl");
  try {
    if (myInput == null) throw "you should fill the form";
    if (myInput == "reza") throw "ok ";
    else throw "not ok";
  } catch (err) {
    rst.innerHTML = err;
  }
}
