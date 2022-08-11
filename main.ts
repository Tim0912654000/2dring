input.onButtonPressed(Button.A, function () {
    selA = 1
    basic.clearScreen()
    doLEDshow2()
    varA = randint(1, 4)
    basic.showString("" + (varA))
    Onec = 1
})
function doMotor12ON () {
    basic.showLeds(`
        # # # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P1, 512)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function doLEDshow2 () {
    for (let indexY = 0; indexY <= 4; indexY++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(index, indexY)
            basic.pause(200)
            led.toggle(index, indexY)
        }
    }
}
function doMotor34OFF () {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P2, 0)
}
function doMotor34ON () {
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P2, 512)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
input.onButtonPressed(Button.B, function () {
    selB = 1
    basic.clearScreen()
    doLEDshow2()
    // 1~4有四種變化,每一出現機率0.25
    // *國小不建議0
    varB = randint(1, 4)
    basic.showNumber(varB)
    Onec = 1
})
function doMotor12OFF () {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P1, 0)
}
let varB = 0
let selB = 0
let Onec = 0
let varA = 0
let selA = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0 && Onec == 1) {
        Onec = 0
        if (selA == 1) {
            selA = 0
            doMotor12ON()
            basic.pause(varA * 1000)
            doMotor12OFF()
        }
        if (selB == 1) {
            selB = 0
            doMotor34ON()
            basic.pause(varB * 1000)
            doMotor34OFF()
        }
    }
})
