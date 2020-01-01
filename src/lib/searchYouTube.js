import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key || YOUTUBE_API_KEY,
      q: options.query,
      part: 'snippet',
      maxResults: options.max || 3,
      type: 'video',
    },
    success: (data) => callback.call(null, data.items) || function (data) {
      console.log('success', data.items);
    },
    error: function (response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;

