import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { VolkswagenCar } from '../type/carType';
import { Card } from 'antd';

import '../assets/css/swiper-custom.css';


const { Meta } = Card;

type Props = {
  arrCars: VolkswagenCar[]
}

const SwiperSlideCustom = ({ arrCars }: Props) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {arrCars && arrCars.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Card
              hoverable
              style={{ width: '100%', height: 170 }}
              cover={<img className='card-img' alt={`Slide ${index + 1}`} src={item.imageUrl} />}
            >
              <Meta title={item.model} description={item.retailPrice} />
            </Card>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperSlideCustom
