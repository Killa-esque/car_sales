import React from 'react';
import { Modal } from 'antd';
import VideoPlayer from './VideoPlayer';

interface VideoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal
      title="Video Player"
      open={isOpen}
      onCancel={onRequestClose}
      footer={null} // Removes the default footer
      width="70%"   // Adjust the width as needed
    >
      <VideoPlayer url={videoUrl} />
    </Modal>
  );
};

export default VideoModal;
