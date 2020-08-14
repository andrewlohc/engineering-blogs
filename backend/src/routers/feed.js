const express = require("express");

const router = express.Router();
const fetchNetflixFeeds = require("../middleware/fetchFeeds");
const Feed = require("../models/feed");

router.get("/feeds", async (req, res) => {
  try {
    await Feed.find({}, function (err, feeds) {
      var feedMap = {};
      feeds.forEach((feed) => {
        feedMap[feed.guid] = feed;
      });
      res.send(feedMap);
    });
  } catch (e) {
    res.status(500).send();
  }
});

// Manually requesting RSS fetch.
router.get("/fetch", async (req, res) => {
  const feed = await fetchNetflixFeeds();

  if (feed) {
    res.status(200).send(feed);
  } else {
    res.status(400).send();
  }
});

module.exports = router;
