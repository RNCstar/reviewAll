class Car {
  constructor(brand) {
    this.brand = brand;
  }
  show() {
    return "it's a : " + this.brand;
  }
}
class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.mod = model;
  }
  nowShow() {
    return this.show() + "\t haaaaaaa \t" + this.mod;
  }
}
var mytest = new Model("BMW", "GTR");
document.getElementById("lbl").innerHTML = mytest.nowShow();
