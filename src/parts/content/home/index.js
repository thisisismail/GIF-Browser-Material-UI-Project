import React from 'react';
import {connect} from 'react-redux';
let source = 'https://images.unsplash.com/photo-1530347927633-5f393ff7abd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';
    

function Home() {
  const myStyle={
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
  };
  return (
    <div>
      <img src={source} style={myStyle} alt="Background"/>
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
