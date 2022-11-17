input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Door Open") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.No)
    } else if (receivedString == "Door Closed") {
        basic.showIcon(IconNames.Yes)
    }
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
