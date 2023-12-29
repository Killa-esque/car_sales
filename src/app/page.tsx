'use client'
import React from 'react'
import { Row, Col } from 'antd';
import volkswagenCars from './constant/car-list';
import SwiperSlideCustom from './components/SwiperSlideCustom';
import TechSegmented from './components/TechSegmented';
import { arrImageTech } from './constant/tech';

const Home = () => {
  return (
    <>
      <Row className='my-3'>
        <div className='container text-center'>
          <h2 className='text-uppercase my-3'>CÁC DÒNG XE</h2>
          <div className='py-3'>
            <SwiperSlideCustom arrCars={volkswagenCars} />
          </div>
        </div>
      </Row>
      <Row>
        <div className='container text-center text-dark'>
          <h2 className='text-uppercase my-3'>CÔNG NGHỆ</h2>
          <div className='py-3'>
            <TechSegmented arrImgTech={arrImageTech} />
          </div>
        </div>
      </Row>
      <Row>
        <div className='container'>
          <h2>
            CỘNG ĐỒNG VOLKSWAGEN
          </h2>
          
        </div>
      </Row>
      <Row><Col span={24}>{/* Maybe Know content */}</Col></Row>
      <Row><Col span={24}>{/* Ceremony content */}</Col></Row>
      <Row><Col span={24}>{/* Blog content */}</Col></Row>
      <Row><Col span={24}>{/* Location content */}</Col></Row>
      <Row><Col span={24}>{/* About content */}</Col></Row>
    </>
  )
}

export default Home
