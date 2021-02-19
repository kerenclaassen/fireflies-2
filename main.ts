let clock = 0
let noon = 8
radio.setTransmitPower(1)
radio.setGroup(1)
basic.forever(function on_forever() {
    
    
    //  if clock hits noon, flash the screen
    if (clock >= noon) {
        //  notify neighbors
        radio.sendNumber(0)
        //  flash
        game.addScore(1)
        //  wait for 2 ticks
        basic.pause(200)
        //  reset the clock
        clock = 0
    } else {
        //  just wait a bit
        basic.pause(100)
        //  increment the clock
        clock += 1
    }
    
})
// when you receive a message from a neighbour
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    
    if (clock < noon) {
        clock += 1
    }
    
})
