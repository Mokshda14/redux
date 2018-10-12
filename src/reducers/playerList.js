import { iPlayers } from '../store/initiatState'
export const players = (state = iPlayers, action) => {
  switch (action.type) {
    case 'PLAYER_LIST':
      //return {state, listOfPlayers: state.listOfPlayers = [...action.list]}
      return {
        ...state,
        listOfPlayers: [...action.list]
      }
    case 'PLAYER_ACTIVE':
      state.listOfPlayers.map(player => {
        player.isActive = false;
        if(action.id === player.id) {
          player.isActive = true;
        }
      })
      //return {state, listOfPlayers: state.listOfPlayers = [...state.listOfPlayers]};
      return {
        ...state,
        listOfPlayers: [...state.listOfPlayers]
      }
    default:
      return state
  }
}