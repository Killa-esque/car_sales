import React from 'react'
import { Row, Col, Flex } from 'antd'
import { Image } from 'antd';

type Props = {}

const IntroPage = (props: Props) => {
  return (
    <Row style={{ marginTop: 150, marginBottom: 150 }}>
      <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
        <h1 style={{ textAlign: 'center' }}>
          GIỚI THIỆU VOLKSWAGEN SÀI GÒN
        </h1>
        <br />
        <p>
          Giới thiệu Volkswagen Sài Gòn – Cùng với sự đầu tư lớn nhất từ trước đến nay, Đại lý ủy quyền Volkswagen Sài Gòn đã thiết lập một chuẩn mực mới tại thị trường ô tô Việt Nam bằng việc khai trương 2 hệ thống showroom tại Thành phố Hồ Chí Minh. Hiện nay Volkswagen Sài Gòn đang chú trọng đến dịch vụ sau bán hàng đồng thời quan tâm hơn đến trải nghiệm người dùng bằng việc đa dạng hóa sản phẩm, chú trọng chất lượng sản phẩm và giá thành.
        </p>
        <Row justify="center">
          <Col xs={{ span: 24 }} md={{ span: 22 }} xl={{ span: 18 }}>
            <Image
              src="https://volkswagenmiennam.com.vn/wp-content/uploads/2023/02/xuong-dich-vu-4-s-volkswagen-sai-gon.jpg"
              alt="Ảnh Volkswagen Sài Gòn"
            />
          </Col>
        </Row>
        <p>
          Hệ thống showroom của Volkswagen Sài Gòn tại Thành phố Hồ Chí Minh đã hoàn thiện để đáp ứng các tiêu chuẩn mới nhất của Volkswagen về trang thiết bị nhà xưởng chính thức hoàn thành và đi vào hoạt động gồm:
        </p>
        <ul>
          <li>Showroom: 682A Trường Chinh, phường 15, Quận Tân Bình, Tp. HCM</li>
        </ul>
        <h4>
          <b>Showroom: 682A Trường Chinh, P. 15, Quận Tân Bình, Tp. HCM.</b>
        </h4>
        <p>
          Việc đưa đại lý Volkswagen Sài Gòn đạt tiêu chuẩn 4S của Volkswagen toàn cầu đi vào hoạt động, cho thấy từng bước một, thương hiệu xe Đức với 80 năm lịch sử đang khẳng định vị thế của mình và chuẩn bị những bước đột phá lớn cho thương hiệu Volkswagen trong năm 2018 tại thị trường Việt Nam.
          <br />
          Với quy mô đầu tư trang thiết bị và cơ sở vật chất đạt tiêu chuẩn 4S toàn cầu đáp ứng đầy đủ các yêu cầu của mô hình 4S
          <br />
          (<b>S</b>ale – Bán hàng, <b>S</b>ervice – Dịch vụ, <b>S</b>pare Parts – Phụ tùng chính hãng, Global <b>S</b>ystem – Kết nối toàn cầu)
        </p>
        <Row gutter={[20, 20]}>
          <Col xs={{ span: 24 }} md={{span: 8}}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/Phong-cho-showroom-vw-768x494.jpg'
              />
            </div>
            <p>Volkswagen Sài Gòn được đánh giá là đại lý ô tô lớn nhất miền Nam với khu trưng bày xe được thiết kế sang trọng, hiện đại. Nhân viên chuyên nghiệp và tận tình.</p>
          </Col>
          <Col xs={{ span: 24 }} md={{span: 8}}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/Volkswagen-showroom-by-Dalziel-and-Pow-Bullring-UK.jpg'
              />
            </div>
            <p>Khu vực 1000m2 trưng bày đầy đủ các mẫu xe Volkswagen đang được phân phối tại Việt Nam như Polo, Jetta, Passat, Tiguan, Touareg, Beetle Scirocco và Sharan, Teramont, T Cross, Virtus …</p>
          </Col>
          <Col xs={{ span: 24 }} md={{span: 8}}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/xuong-vw2-768x494.jpg'
              />
            </div>
            <p>Kho phụ tùng 500m2 với hơn 3000 danh mục phụ tùng được nhập khẩu chính hãng sẽ đáp ứng tất cả nhu cầu về phụ tùng phụ kiện cho các dòng xe mà hãng đang phân phối tại Việt Nam.</p>
          </Col>
        </Row>
        <p>Khu dịch vụ bảo hành, bảo dưỡng và sửa chữa lên đến 2000m2 diện tích sàn. Khu vực tiêu chuẩn với hơn 10 khoang bảo dưỡng và sửa chữa chung. Khu vực thân vỏ và phòng sơn đạt tiêu chuẩn Volkswagen toàn cầu. Toàn bộ khu vực dịch vụ đều được trang bị các máy móc chẩn đoán hiện đại theo tiêu chuẩn kết nối mạng Volkswagen toàn cầu.</p>
        <Row gutter={[20, 20]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <div>
              <p>Chúng tôi tự hào đã xây dựng được đội ngủ nhân viên chuyên nghiệp. Trình độ chuyên môn, nghiệp vụ hoàn hảo đạt tiêu chuẩn đào tạo quốc tế. VW Sài Gòn mang đến cho khách hàng sự tin tưởng, hài lòng về chất lượng và dịch vụ.</p>
              <p>Đầu tư các trang thiết bị hiện đại và bậc nhất cũng được xem là một bước tiến vượt trội. Hệ thống cân chỉnh góc đặt bánh xe, hệ thống cân chỉnh sửa chữa khung gầm, hệ thống pha sơn tự động, chỉnh đèn tự động, hệ thống cân chỉnh phanh, tiêu chuẩn hiện đại bậc nhất nhằm đáp ứng nhu cầu mọi khách hàng.</p>
              <p>VW đặt mục tiêu từng bước chuyên nghiệp hóa trong mọi khâu. Hệ thống Volkswagen Sài Gòn cam kết mang lại cho khách hàng dịch vụ chu đáo nhất.</p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <div style={{ margin: 'auto', width: 'fit-content' }}>
              <Image
                src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/service-vw-768x569.jpg'
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default IntroPage
