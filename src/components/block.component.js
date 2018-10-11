import React from 'react';
import PropTypes from 'prop-types';

const BlockCpt = ({playerId, blocks, clicked, size}) =>  {
    const box = blocks.map((block, index) => {
        if ((index+1)%size) {
    
        return <span key={index} id={index+1} className="blockType" onClick={() => clicked(index+1, playerId)}>{block.text}</span>
    
        } else {
            return <span key={index}> <span  id={index+1} className="blockType" onClick={() => clicked(index+1, playerId)}>{block.text}</span> <br/> </span>
        }
    }
        
    )

    return (
        box
    )
}
    

    




  
export default BlockCpt