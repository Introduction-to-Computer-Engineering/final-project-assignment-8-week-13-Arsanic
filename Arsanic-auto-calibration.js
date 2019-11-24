let MoistReading1 = 0
let MoistReading2 = 0
let MoistReading3 = 0
let MoistAverage = 0
let DampReading1 = 0
let DampReading2 = 0
let DampReading3 = 0
let DampAverage = 0
let reading = 0
function CalibrateMoist(MoistReading: number){

    basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    MoistReading = pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return MoistReading
    basic.showNumber(MoistReading)
    basic.pause(1000)

}
function CalibrateDamp(DampReading: number){

    basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    DampReading = pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return DampReading
    basic.showNumber(DampReading)
    basic.pause(1000)

}

function DiscoverAverage(num1: number, num2: number, num3: number){
    let average = (num1 + num2 + num3) / 3
    return average
}
MoistReading1 = CalibrateMoist(MoistReading1)
DampReading1 = CalibrateDamp(DampReading1)
MoistReading2 = CalibrateMoist(MoistReading2)
DampReading2 = CalibrateDamp(DampReading2)
MoistReading3 = CalibrateMoist(MoistReading3)
DampReading3 = CalibrateDamp(DampReading3)
MoistAverage = DiscoverAverage(MoistReading1, MoistReading2, MoistReading3)
DampAverage = DiscoverAverage(DampReading1, DampReading2, DampReading3)

basic.forever(function (){
    pins.digitalWritePin(DigitalPin.P8, 1)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)

    let LEDreading = pins.map(reading, DampAverage, MoistAverage,4, 0)
    for (let x= 0; x < 5; x++) {
        for (let y = 5; y > LEDreading; y--){
            led.plot(x, y)
            basic.pause(2000)
            basic.clearScreen()
        }
    }
})

