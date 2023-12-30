'use client'
import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'antd';
import volkswagenCars from './constant/car-list';
import SwiperSlideCustom from './components/SwiperSlideCustom';
import TechSegmented from './components/TechSegmented';
import { arrImageTech } from './constant/tech';
import Community from './components/Community';
import CardNews from './components/CardNews';
import { EnvironmentOutlined } from '@ant-design/icons';
import Link from 'next/link';
import SignUpDriveTestForm from './components/SignUpDriveTestForm';

const Home = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsModalVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const showForm = () => {
    setIsModalVisible(true);
  };

  const hideForm = () => {
    setIsModalVisible(false);
  };

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
      <Row className='my-3'>
        <div className='container text-dark text-center'>
          <h2>
            CỘNG ĐỒNG VOLKSWAGEN
          </h2>
          <div className='py-3'>
            <Community />
          </div>
        </div>
      </Row>
      <Row id='blog'>
        <div className='container text-dark text-center'>
          <h2>
            TIN TỨC & KHUYẾN MÃI
          </h2>
          <div className="py-3">
            <div className="row">
              <div className="col-12 col-md-4 col-sm-12 mb-5-md-0 mb-md-0 mt-4">
                <CardNews imgUrl={'https://vwsaigon.vn/wp-content/uploads/2021/06/doi-dieu-ve-volkswagen.jpg'} title={"Thông tin về Volkswagen"} hrefUrl={'/about'} />
              </div>
              <div className="col-12 col-md-4 col-sm-12 mb-5-md-0 mb-md-0 mt-4" onClick={showForm}>
                <CardNews imgUrl={'https://vwsaigon.vn/wp-content/uploads/2021/06/dang-ky-lai-thu-xe.jpg'} title={"Đăng ký lái thử"} hrefUrl={'#blog'} />
              </div>
              <div className="col-12 col-md-4 col-sm-12 mb-5-md-0 mb-md-0 mt-4">
                <CardNews imgUrl={'https://vwsaigon.vn/wp-content/uploads/2021/06/dich-vu-hau-mai.jpg'} title={"Sửa Chữa và Dịch Vụ"} hrefUrl={''} />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className='mt-3' style={{ background: '#151421' }}>
        <div className='container text-dark text-center text-white'>
          <h2 className='fs-1'>Volkswagen Sài Gòn ở đâu?</h2>
          <div className='py-3'>
            <Link href="https://www.google.com/maps/dir//VW+Saigon,+682a+Tr%C6%B0%E1%BB%9Dng+Chinh,+Ph%C6%B0%E1%BB%9Dng+15,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000/@10.8096873,106.634426,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x317529bc337aca6f:0xd7eb551852dcb115!2m2!1d106.6038563!2d10.7303369?hl=vi-VN&entry=ttu">
              <Button className='fw-bold' icon={<EnvironmentOutlined />} style={{ color: '#151421' }}>
                Xem Bản Đồ
              </Button>
            </Link>
          </div>
        </div>
      </Row>

      <SignUpDriveTestForm visible={isModalVisible}
        onClose={hideForm} />
    </>
  )
}

export default Home
