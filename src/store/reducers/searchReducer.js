let initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUTTEXT':
      return action.payload
    default:
      return state
  }
}

export default searchReducer;