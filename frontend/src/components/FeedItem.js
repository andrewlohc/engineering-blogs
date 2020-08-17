import React from "react";
import TimeAgo from "react-timeago";

const FeedItem = ({ feed }) => {
  return (
    <div
      className="item"
      onClick={() => {
        window.location = feed.link;
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        <img alt="\" src={feed.defaultImage} width="150" height="150" />
      </div>
      <div className="content">
        <div className="header">{feed.title}</div>
        <div className="meta">
          {/* <span>{feed.pubDate}</span> */}
          <TimeAgo date={feed.pubDate} />
        </div>
        <div className="description">
          <p>{feed.contentSnippet.substring(0, 400) + "..."}</p>
        </div>
        <div className="extra">
          {!feed.categories
            ? ""
            : feed.categories.map((category) => {
                return (
                  <div key={category} className="ui tag label">
                    {category}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
