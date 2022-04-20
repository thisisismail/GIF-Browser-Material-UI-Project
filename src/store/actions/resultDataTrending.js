const resultDataTrending = (text) => {
  return {
    type: 'RESULTSEARCHTRENDING',
    payload: text,
  }
}

export default resultDataTrending;