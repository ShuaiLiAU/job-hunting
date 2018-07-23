import React, {Component} from 'react';
import './VideoList.css';
import VideosListItem from '../VideosListItem/';

export default class VideoList extends Component{
  render(){
    const videoItems=this.props.videos.map((videos)=>{
      return(
        <div key={videos.etag}>
          <VideosListItem
            videos={videos}
            onVideoSelect={this.props.onVideoSelect}
          />
        </div>
      )
    })

    return(
      <div>
        <ul className="col-md-4">
          {videoItems}
        </ul>
      </div>
    );
  }
}
