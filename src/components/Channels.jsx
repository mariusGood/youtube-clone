/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/helper';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Channels = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );

    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  console.log('channel ===', channel);
  console.log('videos===', videos);
  return (
    <div
      className='d-flex flex-column align-items-center bg-black'
      style={{ minHeight: '87vh' }}
    >
      <img
        alt={channel?.snippet?.title}
        src={channel?.brandingSettings?.image?.bannerExternalUrl}
        style={{ width: '35%', height: '15rem' }}
      />
      <ChannelCard detail={channel} marginTop='-5rem' />
      <div className='d-flex flex-md-row justify-content-center    flex-wrap gap-4'>
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
};

export default Channels;
