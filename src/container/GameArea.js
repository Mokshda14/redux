import { connect } from 'react-redux'
import GameAreaCpt from '../components/game-area.component'

const mapStateToProps = (state) => {
  console.log(state);
  return ({
  players: state.players.listOfPlayers
  })
}




export default connect(
  mapStateToProps, null
)(GameAreaCpt)