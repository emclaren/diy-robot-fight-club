var five = require("johnny-five");
var keypress = require("keypress");

keypress(process.stdin);

var board = new five.Board();
var speed = 0.5 // change this to a value between 0 and 1 to change speed

board.on("ready", function() {

  console.log("FIGHTER READY");

  var servoRight = new five.Servo.Continuous(10);
  var servoLeft = new five.Servo.Continuous(11);
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      process.exit();
    } else if (key.name === "up") {
      console.log("Forward");
      servoRight.ccw(speed); // CCW is short for Counter Clockwise
      servoLeft.cw(speed); // CW is short for Clockwise
    } else if (key.name === "down") {
      console.log("Backward");
      servoRight.cw(speed);
      servoLeft.ccw(speed);
    } else if (key.name === "left") {
      console.log("Left");
      servoRight.ccw(speed);
      servoLeft.ccw(speed);
    } else if (key.name === "right") {
      console.log("Right");
      servoRight.cw(speed);
      servoLeft.cw(speed);
    } else if (key.name === "space") {
      console.log("Stopping");
      servoRight.stop();
      servoLeft.stop();
    }
  });
});