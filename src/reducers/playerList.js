import { iPlayers } from '../store/initiatState'
export const players = (state = iPlayers, action) => {
  switch (action.type) {
    case 'PLAYER_LIST':
      state.length = 0;
      let abc = [ ...state.listOfPlayers, ...action.list]
      return abc;
    case 'PLAYER_ACTIVE':
      state.listOfPlayers.map(player => {
        player.isActive = false;
        if(action.id === player.id) {
          player.isActive = true;
        }
      })
      return state;
    default:
      return state
  }
}