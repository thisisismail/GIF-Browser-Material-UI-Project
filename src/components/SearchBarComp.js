import React from 'react';
import { InputBase, Button, Stack, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {connect} from 'react-redux';
import inputText from '../store/actions/inputText.js';
import resultData from '../store/actions/resultData.js';
import resultDataTrending from '../store/actions/resultDataTrending.js';
import {FetchSearch, FetchSearchTrending} from '../services/FetchSearch.js';


const Input = styled(InputBase)(({theme}) => ({
  backgroundColor: 'whitesmoke',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid whitesmoke',
  fontSize: theme.typography.button.fontSize,
  padding: '0px 5px',
}))

const Search = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  margin: '0px auto',
  padding: '10px',
}))

function SearchBarComp(props) {
 
  const inputSearch = v => {
    props.storeRedux(v.target.value);
  }

  const handleSearch = () => {
    console.log("Searching for " + props.textRedux);
    FetchSearch(props.textRedux)
      .then(e => e.json())
      .then(result => { return props.storeResultRedux(result.data)})
      .then((v) => console.log(v))
      .then(() => console.log('Finish....'))
      .catch((err) => console.error(err));
    FetchSearchTrending()
      .then(e => e.json())
      .then(result => { return props.storeResultReduxTrending(result.data)})
      .then((v) => console.log(v))
      .then(() => console.log('Finish....'))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <Search>
        <Stack spacing={1} direction="row">
          <Input placeholder="Search..." variant="contained" onChange={inputSearch}></Input>
          <Button color="primary" variant="contained" onClick={handleSearch}><SearchIcon/></Button>
        </Stack>
      </Search>
    </div>
  )
}

const mapStateToStore = state => {
  return {
    textRedux: state.inputSearchBar, //ambil state di reducer
  }
}

const mapDispatchToStore = dispatch => {
  return {
    storeRedux: (text) => dispatch(inputText(text)), // persiapan ubah state di reducer
    storeResultRedux: (text) => dispatch(resultData(text)), // persiapan ubah state di reducer
    storeResultReduxTrending: (text) => dispatch(resultDataTrending(text)),
  }
}

export default connect(mapStateToStore, mapDispatchToStore)(SearchBarComp)




