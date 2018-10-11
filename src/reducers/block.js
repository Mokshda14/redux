import { iBlocks } from '../store/initiatState'
export const block = (state = iBlocks, action) => {
    switch (action.type) {
      case 'SET_BLOCK':
        // let arr = {
        //   ...state,
        //     index: action.index,
        //     icon: action.icon,
        //     text: action.text
        //     }let arr = {
        let arr = {state, listOfBlocks: state.listOfBlocks = [...state.listOfBlocks, action.block]}

        return arr;
      case 'SET_BLOCK_VAL':
      state.listOfBlocks.map((block) => {
        if(block.index === action.index) {
         block.text = action.text
         
        }
      })
      return {state, listOfBlocks: state.listOfBlocks = [...state.listOfBlocks]};
      case 'RESET_BLOCKS':
        state.listOfBlocks.length = 0;
        return state;
      default:
        return state
    }
  }
  