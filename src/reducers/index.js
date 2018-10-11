import { combineReducers } from 'redux'
import { players  } from './playerList'
import { activePlayer } from './activePlayer'
import { playerSize } from './playerSize'
import { block } from './block'

export default combineReducers({
    players, activePlayer, block, playerSize
})