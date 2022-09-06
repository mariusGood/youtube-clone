import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div>
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          style={{
            width: 300,
            height: 215,
          }}
          className='card-img-top'
        />
      </Link>
      <div
        className='card-body d-flex flex-column gap-1 '
        style={{ height: 100, width: 300 }}
      >
        <Link
          className='card-title text-decoration-none text-light fw-bold'
          to={`/video/${videoId}`}
        >
          {snippet?.title}
        </Link>
        <Link
          className='card-title text-decoration-none text-light text-opacity-50 font-monospace'
          to={`/channel/${snippet?.channelId}`}
        >
          {snippet?.channelTitle}
          <i className='bi bi-check-circle-fill ms-2'></i>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
