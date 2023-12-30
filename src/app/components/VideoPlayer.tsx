import React from 'react'
import ReactPlayer from 'react-player';

type Props = {
  url: string,
}

const VideoPlayer = ({ url }: Props) => {
  return <ReactPlayer url={url} controls width="100%" height="70vh" />;
};


export default VideoPlayer
