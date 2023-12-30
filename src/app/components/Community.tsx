import React from 'react'
import '../assets/css/community.css'
import VideoPlayer from './VideoPlayer'
import { PlusOutlined } from '@ant-design/icons';
import PortfolioItem from './CommunityItem';


type Props = {}

const Community = (props: Props) => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__content">
          <div className="portfolio__content inner">
            <PortfolioItem
              className="portfolio__item1"
              videoUrl="https://www.youtube.com/embed/7gaB0hmWsWQ?autoplay=1"
              title="Trải nghiệm Volkswagen Teramont"
              author="Volkswagen"
            />

            <PortfolioItem
              className="portfolio__item2"
              videoUrl="https://www.youtube.com/embed/HaN0yAJiq2o?autoplay=1"
              title="Ra mắt chính thức Volkswagen Teramont tại Việt Nam"
              author="Volkswagen"
            />

            <PortfolioItem
              className="portfolio__item3"
              videoUrl="https://www.youtube.com/embed/v4QYqRECEGI?autoplay=1"
              title="Khám phá xe SUV bán chạy nhất Châu Âu - Volkswagen Tiguan Allspace 2021"
              author="Volkswagen"
            />

            <PortfolioItem
              className="portfolio__item4"
              videoUrl="https://www.youtube.com/embed/nYXdHyY4Q9o?autoplay=1"
              title="Khách hàng nói gì về Volkswagen Tiguan"
              author="Volkswagen"
            />

            <PortfolioItem
              className="portfolio__item5"
              videoUrl="https://www.youtube.com/embed/Syw1yvmi5ME?autoplay=1"
              title="Đánh giá VW Teramont với hành trình 300km"
              author="Volkswagen"
            />

            <PortfolioItem
              className="portfolio__item6"
              videoUrl="https://www.youtube.com/embed/95YKfdXF6nM?autoplay=1"
              title="Khám phá Volkswagen Teramont 2021 - Xe SUV 7 chỗ"
              author="Volkswagen"
            />
          </div>
        </div>
      </div>
    </section>


  )
}

export default Community
