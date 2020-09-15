let Current = 0
basic.forever(function () {
    Current = pins.digitalReadPin(DigitalPin.P0)
    if (Current > 50) {
        basic.showString("Warning!")
    } else {
        basic.showString("All clear.")
    }
})
