import React from "react";
import axios from "axios";

import FeedList from "./FeedList";

class App extends React.Component {
  state = { feeds: [] };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = async () => {
    const req = await axios.get("http://localhost:3000/feeds");

    this.setState({
      feeds: req.data,
    });
  };

  render() {
    return (
      <div>
        <div className="ui stackable borderless menu">
          <div className="icon item">
            <h3 claName="ui header">
              <i className="code icon"></i>Engineering Blogs
            </h3>
          </div>
        </div>
        <div className="ui container grid" style={{ marginTop: "10px" }}>
          <FeedList feeds={this.state.feeds} />
        </div>
      </div>
    );
  }
}

export default App;
