input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})
radio.setGroup(17)
basic.forever(function () {
    if (input.acceleration(Dimension.Z) < 100) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("Door Open")
    } else {
        basic.clearScreen()
        radio.sendString("Door Closed")
    }
    basic.pause(2000)
})
