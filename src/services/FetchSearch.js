const FetchSearch = (v) => {
  let SEARCH = v;
  const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=12`;
  console.log('Start loading....');
  return fetch(URL);
};

const FetchSearchTrending = () => {
  const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
  const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=12`;
  console.log('Start loading....');
  return fetch(URL);
}

export {FetchSearch, FetchSearchTrending};
