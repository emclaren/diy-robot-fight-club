# DIY ROBOT FIGHT CLUB

Code to accompany Write/Speak/Code 2019 workshop: DIY Robot Fight Club, developed by Elgin-Skye McLaren

Based on the Simplebot example by Rick Waldron in [Make: JavaScript Robotics](https://github.com/rwaldron/javascript-robotics)

![Example Bot](images/Robot-Example.jpg)


## Kit Components
* 1 Arduino Leonardo & USB Cable
* 1 LED
* 2 Servo Motors 5 VDC
* 2 Wires
* 1 4xAA Battery Pack (with red wire split into two ends, and black wire split into three)

## Other Supplies Needed
* Scissors
* Pencils / Pens
* Duct Tape (so colourful!)

## Getting Started
```bash
git clone https://github.com/emclaren/diy-robot-fight-club.git
cd diy-robot-fight-club
npm install
```

## Test the hardware
Plug in LED to GND + Pin 13
![Wiring for Blink sketch](images/LED-Example.png)

Plug the board to the computer and run
`node blink.js`

## To close the connection
CTRL + C

## Make The Robot
Connect the Hardware
![Wiring for Servo](images/Wiring-Example2.png)
![Wiring for Arduino](images/Wiring-Example1.png)

Plug in the board and run
`node robot.js`

## Fight Club Rules
* Fight club is to be played with two individual's robots at a time.
* Both robots are placed in the center of a small table
* On the count of 3, players can move their robot
* The goal is to knock the other player off the table
* If players are immobilized, they lose the round
* Hilarity ensues


## Notes
It's possible you may need to pass in the serial port required (will vary depending on your OS). Use /dev/tty* for Linux / Mac or COM* for Windows where the * is the relevant port number / name required.

EG on Linux:

`node examples/simplebot.js /dev/ttyUSB0`


## Troubleshooting

### If terminal is not throwing errors
* Check that components are are plugged into the right holes
* Stop the program (CTRL C), check connections, and start it again
* If using the LED, is it possibly backwards?
* Maybe Try using someone else's components to test?

### If terminal is throwing errors
* Is Node installed?
* Is Node reasonably up-to-date (v8 +)
* Check you ran `npm install` in the diy-robot-fight-club folder
* Are you running the program from inside the correct directory?
* If permissions errors during installing packages, try using `sudo npm install`
* If it says something about not being flashed, try a different Arduino board
* If user is on a PC, and it throwing an error about the port not being available, or it is quickly disconnectng (with an error about flashing the board). Try using one of the Blue arduinos Elgin brought.
