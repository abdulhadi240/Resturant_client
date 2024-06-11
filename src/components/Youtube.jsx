'use client'
import React from 'react';
import ReactPlayer from 'react-player/youtube';

const YouTube = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default YouTube;
