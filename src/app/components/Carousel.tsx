import React from 'react'
import { Carousel } from 'antd';
import carousel from '../assets/css/carousel.module.css'

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "700px",
  objectFit: "cover",
  objectPosition: "center",
};


type Props = {
  arrImg: string[]
}

const Carousels = ({ arrImg }: Props) => {
  return (
    <Carousel autoplay className={carousel['carousel']}>
      {arrImg && arrImg.map((item, index) => {
        return (
          <div key={index}>
            <img className={carousel['carousel-image']} src={item} alt="First Slide" style={imageStyle} />
          </div>
        )
      })}
    </Carousel>
  )
}

export default Carousels
