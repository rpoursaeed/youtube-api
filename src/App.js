import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import Videolist from "./Videolist";
import Videodetail from "./Videodetail";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedvideo: null };

  componentDidMount() {
    this.onsearchsubmit("car");
  }

  onsearchsubmit = async (term) => {
    const KEY = "AIzaSyBb7inPQ6Xft3tAsVTQza0Sp0bXxF3PFtM";
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: KEY,
          q: term,
        },
      }
    );

    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0],
    });
  };

  onvideoselect = (video) => {
    this.setState({ selectedvideo: video });
  };

  render() {
    return (
      <div>
        <Searchbar onformsubmit={this.onsearchsubmit} />
        <div className="container">
          <div className="main">
            <Videodetail onvideodetail={this.state.selectedvideo} />
          </div>
          <div className="sidebar">
            <Videolist
              onvideoselect={this.onvideoselect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
