import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ feeds }) => {
  const renderedList = feeds.map((feed) => {
    return <FeedItem key={feed.guid} feed={feed} />;
  });

  return (
    <div className="ui relaxed divided list twelve wide column">
      {renderedList}
    </div>
  );
};

export default FeedList;
