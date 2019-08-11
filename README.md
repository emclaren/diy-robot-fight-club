# DIY ROBOT FIGHT CLUB

Code to accompany Write/Speak/Code 2019 workshop: DIY Robot Fight Club, developed by Elgin-Skye McLaren

Based on the Simplebot example by Rick Waldron in Make: JavaScript Robotics.

https://github.com/rwaldron/javascript-robotics (https://github.com/rwaldron/javascript-robotics)

## Kit Components
1 Arduino Uno or Arduino Leonardo
1 LED
2 Servo Motors 5 VDC
2 Wires
1 4xAA Battery Pack (with red wire split into two ends, and black wire split into three)


## Other Supplies Needed
Scissors
Pencils
Duct Tape

## Getting Started
`git clone https://github.com/emclaren/diy-robot-fight-club.git
cd diy-robot-fight-club
npm install`

## Test the hardware
Plug in the board and run
`node blink.js`

you may need to pass in the serial port required (will vary depending on your OS). Use /dev/tty* for Linux / Mac or COM* for Windows where the * is the relevant port number / name required.

EG on Linux:

`node examples/simplebot.js /dev/ttyUSB0`

## To close the connection
use CTRL + C

##

## Fight Club Rules
Fight club is to be played with two individual's robots at a time.

Both robots are placed in the center of a small table

On the count of 3, players can move their robot

The goal is to knock the other player off the table

If players are immobilized, they are


cw is for clockwise