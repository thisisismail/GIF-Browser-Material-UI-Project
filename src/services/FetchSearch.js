const FetchSearch = (v) => {
  let SEARCH = v;
  const APIKEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=12`;
  console.log('Start loading....');
  return fetch(URL);
};

const FetchSearchTrending = () => {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=12`;
  console.log('Start loading....');
  return fetch(URL);
}

export {FetchSearch, FetchSearchTrending};
