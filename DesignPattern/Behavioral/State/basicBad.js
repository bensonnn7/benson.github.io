var Light = function () {
  this.state = "off";
  this.button = null;
};

self = this;
Light.prototype.init = function () {
  var button = document.createElement("button");
  button.innerHTML = "开关";
  this.button = document.body.appendChild(button);
  this.button.onclick = function () {
    self.buttonWasPressed();
  };
};

Light.prototype.buttonWasPressed = function () {
  if (this.state === "off") {
    console.log("弱光");
    this.state = "weakLight";
  } else if (this.state === "weakLight") {
    console.log("强光");
    this.state = "strongLight";
  } else if (this.state === "strongLight") {
    console.log("关灯");
    this.state = "off";
  }
};

var light = new Light();
light.init();
