const Feed = require("../models/feed");

const storeFeeds = async (feed) => {
  const defaultImage = feed.image;
  const company = feed.company;

  feed.items.forEach(async (item) => {
    const doesFeedExist = await Feed.findOne({ guid: item.guid });

    if (!doesFeedExist) {
      const newFeed = new Feed({
        creater: item.creater,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.content,
        contentSnippet: item.contentSnippet,
        guid: item.guid,
        categories: item.categories,
        isoDate: item.isoDate,
        defaultImage: defaultImage,
        company: company,
      });

      try {
        await newFeed.save();
      } catch (e) {
        console.log(e);
      }
    }
  });
};

module.exports = storeFeeds;
