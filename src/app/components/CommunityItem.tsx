import React, { useState, useCallback } from 'react';
import { Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import VideoPlayer from './VideoPlayer';

interface PortfolioItemProps {
  videoUrl: string;
  title: string;
  author: string;
  className: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ videoUrl, title, author, className }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoPlayerKey, setVideoPlayerKey] = useState(0);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
    setVideoPlayerKey(prevKey => prevKey + 1); // Reset the video player by changing its key
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoUrl?.split('embed/')[1].split('?')[0]}/maxresdefault.jpg`;

  const modalWidth = "70vw"; // Adjust this value based on your preference

  return (
    <div className={`portfolio__item ${className}`} style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
      <img src={thumbnailUrl} alt={title} onClick={showModal} className="portfolio__image" />
      <div className="portfolio__overlay">
        <div className="portfolio__icon" onClick={showModal}>
          <PlusOutlined />
        </div>
        <div className="portfolio__text">
          <h3>{title}</h3>
          <p>By {author}</p>
        </div>
      </div>

      <Modal
        title={title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={modalWidth}
        style={{ top: 20 }}
        centered
      >
        {/* Use the key prop to reset the video player */}
        <VideoPlayer key={videoPlayerKey} url={videoUrl} />
      </Modal>
    </div>
  );
};

export default PortfolioItem;
