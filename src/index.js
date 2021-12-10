import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './componets/search_bar'; //have to provide file path if an import you wrote yourself
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_detail';
//most parent componet needs to fetch data
const API_KEY = 'AIzaSyAffhvyAImwSzAQbtUsFlOFfX1rBUzBkyk';

//Create a new componet which produces some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null
    };
    this.videoSearch('Super Mario 64');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},1000);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}

//Take this componet's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
