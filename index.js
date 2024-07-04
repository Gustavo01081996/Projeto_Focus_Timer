import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds)
{
    state.minutes = minutes
    state.second = seconds

    timer.updateDisplay()

    events.registerControls()
    events.setMinutes()
}