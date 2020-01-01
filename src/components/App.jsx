//Import Elements
//Add Elements to correct place
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // videos: exampleVideoData.slice(),
      // playVideo: exampleVideoData[0]
      videos: [],
      playVideo: {
        id: {},
        snippet: {}

      },
      search: {key: YOUTUBE_API_KEY, query: 'vue', max: 5}

    };
  }

  selectVideo(video) {
    this.setState({
      playVideo: video
    });
    // console.log('clicked');
  }

  componentDidMount() {
    //ask for the information from the youtube and
    searchYouTube(this.state.search, this.initializeData.bind(this));
    //callback to save information


  }

  searchHandler(event) {
    console.log('searching');
    console.log(event.target.value);
    this.setState({
      search: {key: YOUTUBE_API_KEY, query: event.target.value, max: 5}
    });
    searchYouTube(this.state.search, this.initializeData.bind(this));
  }

  initializeData(data) {
    //Set State Correctly
    this.setState({
      videos: data,
      playVideo: data[0]
    });

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search search={this.searchHandler.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.playVideo} value={this.state.search.query}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList click={this.selectVideo.bind(this)} videos={this.state.videos} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
