import React from 'react'
import GameArea from '../container/GameArea'
import PropTypes from 'prop-types';

const GameCpt = ({addPlayers}) => {
    let input = 2;
    return(
    <div className="main-container">
        <div className="player-container">
        <form>
                <input ref={node => input = node} />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    addPlayers(input.value)
                }}>
                Add No. Of players
                </button>
            </form>
        </div>
        <div className="game-container">
            <GameArea />
        </div>
    </div>
    )

}

GameCpt.propTypes = {
     addPlayers: PropTypes.func.isRequired
}

  
export default GameCpt