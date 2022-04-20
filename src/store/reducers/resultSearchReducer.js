let initialState = [];

const resultSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESULTSEARCH':
      return action.payload
    default:
      return state
  }
}

export default resultSearchReducer;