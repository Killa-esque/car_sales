import React from 'react'
import '../assets/css/footer.css'
import Link from 'next/link'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer py-5 container py-md-4">
        <div className="row footer py-5  justify-content-between" >
          <div className="col-lg-4 col-md-6 footer-1">
            <div className="footer-logo mb-4">
              <Link className="navbar-brand d-flex align-items-center" href="index.html">
                {/* <span className='logo' >
                  <img width={50} src="https://volkswagenmiennam.com.vn/wp-content/uploads/2020/09/cropped-logo-transparent-3.png" alt="" />
                </span> */}
                <h6 className='footer-title'>Volkswagen Việt Nam</h6>
              </Link>
            </div>
            <div className="main-social mt-md-4 mt-3">
              <Link href="/" className="facebook"><FacebookOutlined /></Link>
              <Link href="/" className="twitter"><TwitterOutlined /></Link>
              <Link href="/" className="instagram"><InstagramOutlined /></Link>
              <Link href="/" className="linkedin"><LinkedinOutlined /></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-1 pr-lg-5 mt-md-0 mt-5">
            <h6 className="footer-title">Contact Info</h6>
            <p className="mb-2">
              Địa chỉ: <b>682A Trường Chinh, Phường 15, Tân Bình, TP. Hồ Chí Minh</b>
            </p>
            <p className="mb-2">
              Hotline Kinh Doanh: <Link href="0908.422.666">0908.422.666</Link>
            </p>
            <p className="mb-2">
              Hotline Dịch Vụ: <Link href="0909.717.983">0909.717.983</Link>
            </p>
            <p className="mb-2">
              Email : <Link href="mailto:info@example.com">info@example.com</Link>
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-2 mt-lg-0 mt-5">
            <ul>
              <h6 className="footer-title">Services</h6>
              <li><Link href="https://en.volkswagen.com/en.html">Volkswagen AG</Link></li>
              <li><Link href="https://www.volkswagen-group.com/en">Volkswagen International</Link></li>
              <li><Link href="#url">Download bảng giá</Link></li>
              <li><Link href="#url">Dịch vụ tài chính</Link></li>
              <li><Link href="#url">Giới thiệu</Link></li>
              <li><Link href="#url">Hỏi đáp?</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="copyright text-center">
        <p>
          Ⓒ 2021 Corp Vision. All rights reserved. Design by
        </p>
      </section>
    </footer>

  )
}

export default Footer
