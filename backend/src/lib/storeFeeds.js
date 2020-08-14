const Feed = require("../models/feed");

const storeFeeds = async (feed) => {
  feed.items.forEach(async (item) => {
    const doesFeedExist = await Feed.findOne({ guid: item.guid });

    if (!doesFeedExist) {
      const newFeed = new Feed({
        creater: item.creater,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentEncoded: item.contentEncoded,
        contentEncodedSnippet: item.contentEncodedSnippet,
        guid: item.guid,
        categories: item.categories,
        isoDate: item.isoDate,
      });

      try {
        await newFeed.save();
        res.status(201).send(feed);
      } catch (e) {
        res.send(400).send(e);
      }
    }
  });
};

module.exports = storeFeeds;
