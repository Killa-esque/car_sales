import Link from 'next/link'
import React from 'react'
import { PhoneOutlined, MessageOutlined, UpCircleOutlined, HeartOutlined, GlobalOutlined } from '@ant-design/icons';
import '../assets/css/contact.css'

const Contact = () => {
  return (
    <div className="giuseart-nav">
      <ul>
        <li>
          <Link href="https://goo.gl/maps/4VuWABEjRkfEmjHQ6">
            <HeartOutlined /> Tìm đường
          </Link>
        </li>
        <li>
          <Link href="https://zalo.me/2709133172622420604">
            <MessageOutlined /> Chat Zalo
          </Link>
        </li>
        <li className="phone-mobile">
          <Link href="tel:0931866779">
            <PhoneOutlined />
            <span className="btn_phone_txt">Gọi điện</span>
          </Link>
        </li>
        <li>
          <Link href="https://m.me/103695389184621">
            <MessageOutlined /> Messenger
          </Link>
        </li>
        <li>
          <Link href="#testdrivebooking">
            <GlobalOutlined /> ĐK Lái Thử
          </Link>
        </li>
        <li className="to-top-pc">
          <Link href="#">
            <UpCircleOutlined title="Quay lên trên" />
          </Link>
        </li>
      </ul>
    </div >
  )
}

export default Contact
