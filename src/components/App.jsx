//Import Elements
//Add Elements to correct place
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData.slice(),
      playVideo: exampleVideoData[0]
    }
  }

  selectVideo(video) {
    this.setState({
      playVideo: video
    });
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer playVideo={this.state.playVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList click={this.selectVideo.bind(this)} videos={this.state.videos} /></h5></div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
