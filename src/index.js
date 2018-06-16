import _ from 'lodash';
//Install React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Import the you toub api seach
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';


//Components
import SearchBar from './components/search_bar';

//API key to access youtube
const API_KEY = 'AIzaSyCrV9syOXzzyDoKd2bWXePPvJQvMsEWMeo'
//NPM PACKAGE TO REQUEST A LIST OF VIDEOS FROM YOUTUBE


//1. Create a new component to produce some html
//App is a class
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        //3. youtube search
        YTsearch({key: API_KEY, term: term}, (videos) => {
            this.setState({   //sameas {videos: videos}
            videos: videos,
            selectedVideo: videos[0]
            });
        });

    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

//2. Take this components generated HTML and put it on the page DOM
// Get an instance of App, render takes 2 arguments
ReactDOM.render(<App />, document.querySelector('.container'));
