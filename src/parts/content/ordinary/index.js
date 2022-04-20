import React from 'react';
import {connect} from 'react-redux';
import {ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function ContentSecOrdinary(props) {

  const printResult = ( 

    <ImageList variant="standard" cols={3}>
      {props.resultSearchRedux.map((item) => (
        <ImageListItem key={`${item.id}`}>
          <img
            src={`${item.images.original.url}?`}
            srcSet={`${item.images.original.url}?`}
            alt={`${item.title}`}
            loading="lazy"
          />
          <ImageListItemBar
            title={`${item.title}`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    
  );

  return (
    <div >
      {printResult}
    </div>
  )
}

const mapStateToStore = state => {
  return {
    resultSearchRedux: state.resultSearch, //ambil state di reducer
  }
}

export default connect(mapStateToStore)(ContentSecOrdinary)
