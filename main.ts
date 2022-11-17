input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.setGroup(17)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 100) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("Door Open")
    } else {
        basic.clearScreen()
        radio.sendString("Door Closed")
    }
    basic.pause(2000)
})
