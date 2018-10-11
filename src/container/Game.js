import { connect } from 'react-redux'
import GameCpt from '../components/game.component'
import { setPlayer} from '../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => ({
    addPlayers: (val) => { 
        dispatch(setPlayer(val))
    }
})



export default connect(
  null,
  mapDispatchToProps
)(GameCpt)