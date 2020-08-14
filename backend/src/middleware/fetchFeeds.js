Parser = require("rss-parser");
const storeFeeds = require("../lib/storeFeeds");

// Cross-origin resorce sharing proxy
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const parser = new Parser();

const fetchNetflixFeeds = async () => {
  const feed = await parser
    .parseURL("https://medium.com/feed/@NetflixTechBlog")
    .catch((error) => console.log(error.message));

  try {
    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Netflix RSS Feeds fetched.");

  return feed;
};

// The fetch function runs once per day
setInterval(fetchNetflixFeeds, 1000 * 60 * 60 * 24);

module.exports = fetchNetflixFeeds;
