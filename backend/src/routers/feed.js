const express = require("express");

const router = express.Router();
const {
  fetchNetflixFeeds,
  fetchShopifyFeeds,
  fetchEtsyFeeds,
  fetchFaceBookFeeds,
  fetchMicrosoftFeeds,
} = require("../middleware/fetchFeeds");
const Feed = require("../models/feed");

router.get("/feeds", async (req, res) => {
  try {
    await Feed.find({}, function (err, feeds) {
      res.send(feeds);
    }).sort({ pubDate: "desc" });
  } catch (e) {
    res.status(500).send();
  }
});

// Manually requesting RSS fetch.
router.get("/fetch", async (req, res) => {
  await fetchNetflixFeeds();
  await fetchShopifyFeeds();
  await fetchEtsyFeeds();
  await fetchFaceBookFeeds();
  const feed = await fetchMicrosoftFeeds();

  if (feed) {
    res.status(200).send(feed);
  } else {
    res.status(400).send();
  }
});

module.exports = router;
