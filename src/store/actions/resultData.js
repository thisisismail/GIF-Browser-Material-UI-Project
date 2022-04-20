const resultData = (text) => {
  return {
    type: 'RESULTSEARCH',
    payload: text,
  }
}

export default resultData;