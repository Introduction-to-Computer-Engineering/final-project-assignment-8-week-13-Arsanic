basic.forever(function () {
    pins.i2cWriteNumber(33, 6, NumberFormat.Int32BE)
    pins.i2cWriteNumber(33, 9, NumberFormat.Int32BE)

})
