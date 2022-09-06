import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/helper';
import Videos from './Videos';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchId } = useParams();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchId}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchId]);

  return (
    <div className='bg-black d-flex flex-lg-row flex-xs-row'>
      <div style={{ paddingLeft: '6rem' }}>
        <h1 className='text-light'>
          Search result for:{' '}
          <span style={{ color: '#FC1500' }}>{searchId}</span> videos
        </h1>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Search;
