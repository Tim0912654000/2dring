input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    A = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    B = 1
})
let B = 0
let A = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (A == 1 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P1, 512)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P1, 0)
        A = 0
    }
    if (B == 1 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P2, 512)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P2, 0)
        B = 0
    }
})
