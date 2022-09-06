import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/helper';
import SideBar from './SideBar';
import Videos from './Videos';

const Home = () => {
  const [selected, setSelected] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <div className='bg-black d-flex flex-lg-row flex-xs-row'>
      <SideBar selected={selected} setSelected={setSelected} />
      <div style={{ paddingLeft: '12rem' }}>
        <h1 className='text-light'>
          {selected} <span style={{ color: '#FC1500' }}>videos</span>
        </h1>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Home;
