let temperature = 0
radio.setGroup(99)
basic.forever(function () {
    temperature = input.temperature()
    basic.showNumber(temperature)
    radio.sendNumber(temperature)
    basic.pause(10000)
    if (temperature > 25) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showString("AC!")
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.showString("AC!")
    }
})
