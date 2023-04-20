var OffLightState = function (light) {
  this.light = light;
};
OffLightState.prototype.buttonWasPressed = function () {
  console.log("弱光"); // offLightState 对应的行为
  this.light.setState(this.light.weakLightState);
};

// WeakLightState:
var WeakLightState = function (light) {
  this.light = light;
};
WeakLightState.prototype.buttonWasPressed = function () {
  console.log("强光"); // weakLightState 对应的行为
  this.light.setState(this.light.strongLightState);
};

// StrongLightState:
var StrongLightState = function (light) {
  this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function () {
  console.log("关灯"); // strongLightState 对应的行为
  // 切换状态到offLightState
  // 4.2 状态对象也需要持有 light 对象的引用, 以便调用 light 中的方法
  this.light.setState(this.light.offLightState);
};

// 这里对我来说还是比较新，需要事先创建好不同的状态 instance
// 持有状态对象的引用,
var Light = function () {
  // 4.1 light 对象被传入状态类的构造函数
  this.offLightState = new OffLightState(this);
  this.weakLightState = new WeakLightState(this);
  this.strongLightState = new StrongLightState(this);
  this.button = null;
};

Light.prototype.setState = function (newState) {
  this.currState = newState;
};

// 设置状态，并且只需要 invoke function
Light.prototype.init = function () {
  var button = document.createElement("button"),
    self = this;
  this.button = document.body.appendChild(button);
  this.button.innerHTML = "开关";
  // 设置默认初始状态
  this.currState = this.offLightState;
  // 定义用户的请求动作
  this.button.onclick = function () {
    self.currState.buttonWasPressed();
  };
};
