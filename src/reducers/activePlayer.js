import {iActivePlayer } from '../store/initiatState'
export const activePlayer = (state = iActivePlayer, action) => {
    switch (action.type) {
      case 'PLAYER_ACTIVE':
        return {
          ...state,
            id: action.id
        }
      default:
        return state
    }
  }
  
  