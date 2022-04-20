import React from 'react';
import {connect} from 'react-redux';

function Home() {

  return (
    <div>
    </div>
  )
}

const mapStateToStore = state => {
  return {
    resultSearchReduxTrending: state.resultSearchTrending, //ambil state di reducer
    inputSearchBar: state.inputSearchBar,
  }
}

export default connect(mapStateToStore)(Home)
