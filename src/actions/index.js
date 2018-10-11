export const setPlayerSize = size => ({
  type: 'PLAYER_SIZE',
  size
})
export const togglePlayer = id => ({
  type: 'PLAYER_ACTIVE',
  id
})
export const playerList = players => {
  
  return dispatch=> {
    
    dispatch({
      type: 'PLAYER_LIST',
      list: players
    })
    dispatch(togglePlayer(players.length))
  }
}
export const setPlayer = (id, icon=iconType.TAC, isActive=false) => {
  return dispatch=>{
    let listOfPlayers = [];
    dispatch(resetBlocks());
    dispatch(setPlayerSize(id));
    let count = 0;
    for(let players =1;players <=id; players++){
      listOfPlayers.push({ id: players, name: "player"+players, icon, isActive});
      for(let players =1;players <=id; players++){
      dispatch(setBlock(++count))
      }
    }
    dispatch(playerList(listOfPlayers));
    
 }
}
export const setBlockValue = (index, text, size) => {
  let player;
  return dispatch => (
  player = (text+1)> size ? 1 : (text+1),

  dispatch(togglePlayer(player)),
  dispatch({
    type: 'SET_BLOCK_VAL',
    text,
    index
  })
  )
}
export const resetBlocks = () => ({
  type : 'RESET_BLOCKS',
})
export const setBlock = (index, icon=iconType.TAC, text='') => ({
  type : 'SET_BLOCK',
  block : {index,
  icon,
  text}
})
export const iconType = {
  TIC: "tic",
  TAC: "tac",
  TOE: "toe"
}