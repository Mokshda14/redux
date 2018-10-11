import {iPlayerSize } from '../store/initiatState'
export const playerSize = (state = iPlayerSize, action) => {
    switch (action.type) {
      case 'PLAYER_SIZE':
        return {
          ...state,
            size: action.size
        }
      default:
        return state
    }
  }