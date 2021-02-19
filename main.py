clock = 0
noon = 8
radio.set_transmit_power(1)
radio.set_group(1)

def on_forever():
    global clock
    global noon
    # if clock hits noon, flash the screen
    if clock >= noon:
        # notify neighbors
        radio.send_number(0)
        # flash
        game.add_score(1)
        # wait for 2 ticks
        basic.pause(200)
        # reset the clock
        clock = 0
    else:
        # just wait a bit
        basic.pause(100)
        # increment the clock
        clock += 1
basic.forever(on_forever)

#when you receive a message from a neighbour
def on_received_number(receivedNumber):
    global clock
    global noon
    if clock < noon:
        clock += 1
radio.on_received_number(on_received_number)