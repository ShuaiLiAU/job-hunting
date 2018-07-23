import React from 'react';

const VideosListItem = ({videos, onVideoSelect})=>{
  // const videos = props.videos 这句话就等于括号里的{videos} 当然了，要把{videos}换成props(这里没有{})
  console.log(videos);
  const imageUrl= videos.snippet.thumbnails.default.url
  return(
    <li onClick={()=>onVideoSelect(videos)} className="list-group-item">
      <div className="video-list">
        <div className="media-left">
          <img
          className="media-object"
          alt="pic"
          src={imageUrl}
          />
        </div>

        <div className="media-body">
          <div className="media-heading" >
            {videos.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideosListItem
