import VideoListEntry from './VideoListEntry.js';
//Iterate over array props.video

//Map Array to <VideoListEntry>


// import exampleVideoData from './data/exampleVideoData.js';
var VideoList = (props) =>  (
  <div className="video-list">
    {props.videos.map((video)=><VideoListEntry video={video} /> ) }
    {/* // <div><h5><em>videoListEntry</em> <VideoListEntry video={props.videos[0]}/></h5></div>
    // <div><h5><em>videoListEntry</em> <VideoListEntry video={props.videos[1]}/></h5></div>
    // <div><h5><em>videoListEntry</em> <VideoListEntry video={props.videos[2]}/></h5></div>
    // <div><h5><em>videoListEntry</em> <VideoListEntry video={props.videos[3]}/></h5></div>
    // <div><h5><em>videoListEntry</em> <VideoListEntry video={props.videos[4]}/></h5></div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
