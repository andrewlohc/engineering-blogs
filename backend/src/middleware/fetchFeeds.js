Parser = require("rss-parser");
const storeFeeds = require("../lib/storeFeeds");

// Cross-origin resorce sharing proxy
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const parser = new Parser();

// Rename JSON old key to new key.
function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

const fetchNetflixFeeds = async () => {
  const feed = await parser
    .parseURL("https://medium.com/feed/@NetflixTechBlog")
    .catch((error) => console.log(error.message));

  try {
    // Preprocess key mapping and add default image.
    feed.items.forEach((item) => {
      renameKey(item, "content:encoded", "content");
      renameKey(item, "content:encodedSnippet", "contentSnippet");
    });
    feed["image"] = feed["image"]["url"];
    feed["company"] = "netflix";

    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Netflix RSS Feeds fetched.");

  return feed;
};

const fetchShopifyFeeds = async () => {
  const feed = await parser
    .parseURL("https://engineering.shopify.com/blogs/engineering.atom")
    .catch((error) => console.log(error.message));

  try {
    // Preprocess key mapping and add default image.
    feed.items.forEach((item) => {
      renameKey(item, "id", "guid");
    });

    feed["image"] =
      "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/glyph-sample-circle-44ec109fbd7769a2cc1af7b81562cec26c8b12e7ab999d22fd01ca684fc0be5e.svg";
    feed["company"] = "shopify";

    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Shopify RSS Feeds fetched.");

  return feed;
};

const fetchEtsyFeeds = async () => {
  const feed = await parser
    .parseURL("https://codeascraft.com/feed/atom/")
    .catch((error) => console.log(error.message));

  try {
    // Preprocess key mapping and add default image.
    feed.items.forEach((item) => {
      renameKey(item, "id", "guid");
    });

    feed["image"] =
      "https://codeascraft.com/wp-content/themes/codeascraft/images/code_as_craft_logo.svg";
    feed["company"] = "etsy";

    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Etsy RSS Feeds fetched.");

  return feed;
};

const fetchFaceBookFeeds = async () => {
  const feed = await parser
    .parseURL("https://engineering.fb.com/feed/")
    .catch((error) => console.log(error.message));

  try {
    // Preprocess key mapping and add default image.
    feed["image"] =
      "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512";
    feed["company"] = "facebook";

    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Facebook RSS Feeds fetched.");

  return feed;
};

const fetchMicrosoftFeeds = async () => {
  const feed = await parser
    .parseURL("https://devblogs.microsoft.com/landingpage/")
    .catch((error) => console.log(error.message));

  try {
    // Preprocess key mapping and add default image.
    feed["image"] =
      "https://azurecomcdn.azureedge.net/cvt-f1f36ecefd204d05ba2ae8141746810490742b2296c4c16d58ed9e0f3ee99345/images/shared/social/azure-icon-250x250.png";
    feed["company"] = "microsoft";

    await storeFeeds(feed);
  } catch (error) {
    console.log(error);
  }

  console.log("Microsoft RSS Feeds fetched.");

  return feed;
};

// The fetch function runs once per day
setInterval(fetchNetflixFeeds, 1000 * 60 * 60 * 24);
setInterval(fetchShopifyFeeds, 1000 * 60 * 60 * 24);
setInterval(fetchEtsyFeeds, 1000 * 60 * 60 * 24);
setInterval(fetchFaceBookFeeds, 1000 * 60 * 60 * 24);
setInterval(fetchMicrosoftFeeds, 1000 * 60 * 60 * 24);

module.exports = {
  fetchNetflixFeeds,
  fetchShopifyFeeds,
  fetchEtsyFeeds,
  fetchFaceBookFeeds,
  fetchMicrosoftFeeds,
};
