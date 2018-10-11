import { connect } from 'react-redux'
import BlockCpt from '../components/block.component'
import { setBlockValue } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  let player = [{"id":0}];
  player = state.players.listOfPlayers.filter((player) => {
      return (player.isActive ? player.id : null);
  })
  console.log(state);
  return ({
    playerId: (player && player.length>0)? player[0].id: 0,
    // index: ownProps.id,
    blocks: state.block.listOfBlocks,
    size: state.playerSize.size
    })
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return(
        {clicked: (index, playerId) => dispatch(setBlockValue(index, playerId))}
    )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockCpt)