const express = require("express");

const router = express.Router();
const fetchNetflixFeeds = require("../middleware/fetchFeeds");

router.get("/feeds", async (req, res) => {
  res.status(200).send();
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
