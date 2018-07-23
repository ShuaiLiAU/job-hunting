
import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from '../SearchBar/';
import VideoList from '../VideoList/';
import VideoDetails from '../VideoDetails/';
import YTSearch from 'youtube-api-search';
import './Layout.css';
const API_KEY = 'AIzaSyBv5Htzijr5-3WBHMU-N3V21Ez9yBb-6vY';

class Layout extends Component{

  //个人猜测，这个contructor只运行一次，也就是说，程序最初加载的时候，会运行它，并初始化state
  //之后，所有state的改变，都直接运行render，而不再需要运行构造器本身

  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null,
    }

    // YTSearch({key: API_KEY, term: this.state.term}, (videos)=>{
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0],
    //   });
    //   //this.setState({videos: videos});
    // })

    this.videoSearch('Destiny 2')
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return(
      <div className="all">
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetails  videos={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo=>this.setState({selectedVideo: selectedVideo})}
        />
      </div>
    );
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    })
  }
}

export default Layout

//<SearchBar term={this.state.term} onSearchTermChange={term=>this.videoSearch(term)}/>
//上面这条命令，说明了传递方法的正确方式
