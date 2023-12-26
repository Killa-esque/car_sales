import React from 'react'
import { Row, Col, Image } from 'antd'
import CTA from '@/app/components/CTA'

type Props = {}

const PolicyPage = (props: Props) => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 4 }} xl={{ span: 12, offset: 6 }}>
        <h1 style={{ textAlign: 'center' }}>CHÍNH SÁCH BẢO HÀNH</h1>
        <p>
          Volkswagen Sài Gòn luôn mang chính sách bảo hành tốt nhất đến với quý khách hàng.
          Đội ngũ nhân viên tận tâm, nghiệp vụ hoàn hảo đạt tiêu chuẩn đào tạo quốc tế nhằm đem đến cho khách hàng sự tin tưởng, hài lòng tốt nhất.
        </p>
        <Row justify="center">
          <Col xs={{ span: 24 }} md={{ span: 22 }} xl={{ span: 18 }}>
            <Image
              src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/VW-Waranty-768x198.jpg'
              alt='Ảnh Logo Volkswagen'
            />
          </Col>
        </Row>
        <br />
        <p>
          Hệ thống nhà xưởng của Volkswagen Sài Gòn được đầu tư các trang thiết bị hiện đại và bậc nhất.
          Khu dịch vụ bảo hành, bảo dưỡng và sửa chữa lên đến 2000m2 bao gồm khu vực tiêu chuẩn với hơn 10 khoan bảo dưỡng và sửa chữa chung cùng khu vực thân vỏ và phòng sơn đạt tiêu chuẩn Volkswagen toàn cầu.
        </p>
        <p>
          Chính sách bảo hành của Volkswagen Sài Gòn rất chu đáo và thuận lợi cho khách hàng.
          Khi đến với xưởng dịch vụ của Volkswagen Sài Gòn, xe của quý khách sẽ được hưởng những chính sách bảo hành như sau:
        </p>
        <Row gutter={[20, 20]}>
          <Col order={2} md={{ span: 24 }} lg={{ span: 12, order: 1 }}>
            <div>
              <ul>
                <li>Bảo hành toàn cầu 2 năm không giới hạn km (Kể từ ngày giao xe).</li>
                <li>Cho tất cả các xe mới do Volkswagen Sài Gòn phân phối.</li>
                <li>Phụ tùng chính hãng Volkswagen được nhập khẩu</li>
              </ul>
              <p>
                Thời hạn bảo hành đối với phụ tùng là 02 năm, ngoại trừ các phụ tùng hao mòn thông thường và hư hỏng do sử dụng quá mức hoặc do thay đổi đặc trưng sẽ không được bảo hành.
                Thời gian bảo hành căn thứ theo ngày có hoá đơn bán hàng.
              </p>
              <p>
                Thời hạn bảo hành không bị ảnh hưởng nếu có thay đổi chủ sở hữu của xe.
              </p>
              <p>
                Hãy đến ngay đại lý Volkswagen Sài Gòn để cảm nhận sự chuyên nghiệp.
              </p>
            </div>
          </Col>
          <Col order={1} md={{ span: 24 }} lg={{ span: 12, order: 2 }}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/VW-Service-4.jpg'
                alt='Dịch vụ Volkswagen'
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/Xuong-dong-son-volkswagen2-1024x683.jpg'
                alt='Xưởng sơn Volkswagen'
              />
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/Xuong-dich-vu-dong-don-vw3-1024x683.jpg'
                alt='Xưởng dịch vụ Volkswagen'
              />
            </div>
          </Col>
        </Row>
        <br />
        <CTA />
        <br />
      </Col>
    </Row>
  )
}

export default PolicyPage
