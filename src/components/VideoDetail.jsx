import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { fetchData } from '../utils/helper';
import Videos from './Videos';
import '../App.css';

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams(null);

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet)
    return <h1 className='text=-light'>Loading...</h1>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  console.log('videoDetails ===', videoDetails);
  console.log('videos ===', videos);

  return (
    <div className='bg-black' style={{ minHeight: '87vh' }}>
      <div className='d-flex flex-sm-column flex-md-row'>
        <div className='ps-5 pt-4'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width={'70vw'}
            height={'35vw'}
            pip
            controls
          />
          <h5 className='text-light fw-bold pt-2'>{title}</h5>
          <div className='d-flex flex-row justify-content-between text-light'>
            <Link
              className='text-decoration-none text-light'
              to={`channel/${channelId}`}
            >
              {channelTitle}
            </Link>
            <div className='d-flex flex-row align-items-center gap-3'>
              <p>{parseInt(viewCount).toLocaleString()} views</p>
              <p>
                <i className='bi bi-hand-thumbs-up'></i>{' '}
                {parseInt(likeCount).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div
          className='d-flex flex-column ps-4 overflow-scroll scroll'
          style={{ height: '87vh' }}
        >
          <Videos direction='column' videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
