let initialState = [];

const resultSearchReducerTrending = (state = initialState, action) => {
  switch (action.type) {
    case 'RESULTSEARCHTRENDING':
      return action.payload
    default:
      return state
  }
}

export default resultSearchReducerTrending;