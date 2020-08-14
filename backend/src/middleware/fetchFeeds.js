Parser = require("rss-parser");
const storeFeeds = require("../lib/storeFeeds");

// Cross-origin resorce sharing proxy
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// const fetchNetflixFeeds = async () => {
//   console.log("hello");
//   const feed = await parser.parseURL(
//     CORS_PROXY + "https://medium.com/feed/@NetflixTechBlog"
//   );
//   console.log(feed);
// };

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

// The fetch function runs once per day. (86400 ms = 1 day)
setInterval(fetchNetflixFeeds, 86400);

module.exports = fetchNetflixFeeds;
