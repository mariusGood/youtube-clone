import React from 'react';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({ videos, direction }) => {
  if (!videos) return <h1 className='text-light'>Loading...</h1>;

  return (
    <div
      className='d-flex flex-wrap gap-4'
      style={{ flexDirection: direction || 'row' }}
    >
      {videos.map((item) => (
        <div key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard detail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
