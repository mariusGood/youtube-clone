import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ detail, marginTop }) => {
  return (
    <div className='text-center' style={{ width: '19rem', marginTop }}>
      <Link to={`/channel/${detail?.id?.channelId}`}>
        <img
          className='rounded-circle card-img-top w-50 h-25 mt-4'
          src={detail?.snippet?.thumbnails?.medium?.url}
          alt={detail?.snippet?.title}
        />
      </Link>
      <div className='d-flex flex-column justify-content-center text-center gap-2'>
        <Link
          className='card-title text-decoration-none text-light font-monospace fw-bold'
          to={`/channel/${detail?.snippet?.channelId}`}
        >
          {detail?.snippet?.title}
          <i className='bi bi-check-circle-fill ms-2'></i>
        </Link>
        {detail?.statistics?.subscriberCount && (
          <p className='text-light font-monospace'>
            {parseInt(detail?.statistics?.subscriberCount).toLocaleString()}{' '}
            Subscribers
          </p>
        )}
      </div>
    </div>
  );
};

export default ChannelCard;
