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
      {/* <div>
        <img className={carousel['carousel-image']} src="https://vwsaigon.vn/wp-content/uploads/2021/06/vw-saigon-gioi-thieu.jpg" alt="First Slide" style={imageStyle} />
      </div>
      <div>
        <img className={carousel['carousel-image']} src="https://vwsaigon.vn/wp-content/uploads/2023/08/RGB_Teramont_Ban-chay-nhat-phan-khuc2-3-min-1.png" alt="Second Slide" style={imageStyle} />
      </div>
      <div>
        <img className={carousel['carousel-image']} src="https://assets.volkswagen.com/is/image/volkswagenag/XCN_5636?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE4MDAmaGVpPTEwMTMmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNWVkOA==" alt="Third Slide" style={imageStyle} />
      </div> */}
    </Carousel>
  )
}

export default Carousels
