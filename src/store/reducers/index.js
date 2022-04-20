import {combineReducers} from '@reduxjs/toolkit';
import searchReducer from './searchReducer.js';
import resultSearchReducer from './resultSearchReducer.js';
import resultSearchReducerTrending from './resultSearchReducerTrending.js'

const allReducers = combineReducers({
  inputSearchBar: searchReducer,
  resultSearch: resultSearchReducer,
  resultSearchTrending: resultSearchReducerTrending,
})

export default allReducers;