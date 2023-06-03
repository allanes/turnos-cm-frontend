import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { PORT_SERVER } from '../../../types/config'

const VideoPlayer = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
    const response = await axios.get(`${PORT_SERVER}/lista-videos-locales`);
    setVideoUrls(response.data);
    };

    fetchVideos();
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videoUrls.length);
  };

  return (
    <div style={{flex: 1, height: '100vh'}}>
      <ReactPlayer 
        url={videoUrls[currentVideoIndex]} 
        controls={true}
        playing={true}
        onEnded={handleVideoEnd}
        config={{
          file: {
            forceVideo: true,
            attributes: {
              controlsList: 'nodownload'
            }
          }
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;
