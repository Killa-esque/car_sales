import React from 'react'
import Carousels from './components/Carousel'
import { Row, Col } from 'antd';

const Home = () => {
  return (
    <>
      <Row><Col span={24}>{/* Promotion content */}</Col></Row>
      <Row><Col span={24}>{/* Home Delivery content */}</Col></Row>
      <Row><Col span={24}>{/* Product content */}</Col></Row>
      <Row><Col span={24}>{/* Maybe Know content */}</Col></Row>
      <Row><Col span={24}>{/* Ceremony content */}</Col></Row>
      <Row><Col span={24}>{/* Blog content */}</Col></Row>
      <Row><Col span={24}>{/* Location content */}</Col></Row>
      <Row><Col span={24}>{/* About content */}</Col></Row>
    </>
  )
}

export default Home
