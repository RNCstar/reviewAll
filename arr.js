var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var myArr2 = new Array(1, 2, 3, 4, 5);
// arr methods
// Array length
// Array toString()
// Array pop()  remove last value of array
var myPop = myArr.pop();
// document.write(myPop);
// Array push()  add new value at the end of array
var mypush = myArr.push(11);
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()
// ------------------------------------------------------------------

//arr sort ()     like myArr.sort();
// ----------------------------------------------------------------
// foreach  3 part value    1) value    2)index     3)array
var txt = "";
myArr.forEach((value, index, arr) => {
  txt += value + "<br>";
});
// ----------------------------------------------------------------

// map  makes a new original array just ones
var txt2;
var myNewArr = myArr.map((value, index, arr) => {
  return value * 2;
});
// ----------------------------------------------------------------
// filter()
var over18;
var ovr18 = myNewArr.filter((value, index, arr) => {
  return value > ovr18;
});
document.getElementById("lbl").innerHTML = over18;
