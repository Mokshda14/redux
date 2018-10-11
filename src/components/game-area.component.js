import React from 'react';
import Block from '../container/Block'

const GameAreaCpt = ({players}) => {
    
    // const box= players.map((player) => 
    //         players.map((player, index) =>{
    //             if(index === players.length-1) {
    //                 return (
    //                     <span>
    //                         <Block key={index} id={index+1}>ABC </Block>
    //                         <br/>
    //                     </span>
    //                 )
    //             }
    //             else return (
    //                 <Block key={index} id={index+1}>ABC </Block>
    //             )
                
    //         }     
    //         )
            
    //     );
    
    return(
    
   <div>
        <span> Players Created: </span>
        <div>
        {players.map((player, index) => 
            <div key={index}>
                <span style={{fontWeight: player.isActive ? 'bold': 'normal'}}>
                    {player.name}
                </span>
            </div>
        )}
        </div>


        <div className="block-container">
            <Block />
        </div> 
        
    </div>
)}


export default GameAreaCpt