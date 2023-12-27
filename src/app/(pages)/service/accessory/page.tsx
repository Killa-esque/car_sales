import React from 'react'
import { Col, Row, Image } from 'antd'
import CTA from '@/app/components/CTA'

type Props = {}

const AccessoryPage = (props: Props) => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 4 }} xl={{ span: 12, offset: 6 }}>
        <h1 style={{ textAlign: 'center' }}>PHỤ TÙNG - PHỤ KIỆN</h1>
        <p>
          Volkswagen Sài Gòn cung cấp phụ tùng và phụ kiện chính hãng nhập khẩu từ Volkswagen toàn cầu.
          Với những tiêu chuẩn khắc khe nhằm mang lại dịch vụ tốt nhất cho khách hàng của Volkswagen Sài Gòn.
          Volkswagen Sài Gòn cam kết cung cấp cho khách hàng phụ tùng và phụ kiện chính hãng. Mang lại sự đảm bảo sự an toàn và chất lượng tuyệt đối.
          Tại kho của Volkswagen Sài Gòn luôn có sẵn phụ tùng, đảm bảo chính hãng 100%. Quý khách hàng hoàn toàn có thể yên tâm với giá cả niêm yết và công khai.
        </p>
        <Row justify="center">
          <Col xs={{ span: 24 }} md={{ span: 22 }} xl={{ span: 18 }}>
            <Image
              src='https://volkswagenmiennam.com.vn/wp-content/uploads/2019/07/VW-Parts.jpg'
              alt='Ảnh phụ tùng Volkswagen chính hãng'
            />
          </Col>
        </Row>
        <br />
        <p>
          Phụ tùng và phụ kiện chính hãng nhập khẩu trực tiếp từ nhà máy sản xuất tại Đức và các nước Châu Âu đạt tiêu chuẩn khắc khe nhất về chất lượng.
          Quý khách hàng sẽ hoàn toàn yên tâm về chất lượng dịch vụ cũng như phụ tùng. Tất cả các sản phẩm đều được niêm yết giá cụ thể, nguồn gốc sản xuất rõ ràng.
        </p>
        <p>
          Volkswagen Sài Gòn luôn mang đến sự tin tưởng và chất lượng tuyệt đối đến quý khách hàng.
          Ngoài ra, dịch vụ chăm sóc khách hàng sẽ ghi nhận lại những thông tin phản hồi về chất lượng của xưởng dịch vụ để xưởng ngày càng hoạt động tốt hơn.
        </p>
        <p>
          Volkswagen Sài Gòn - Số 6 Trường Chinh, Phường 15, Quận Tân Bình, TP HCM.
        </p>
        <p>Hotline: <a href="tel:0909717983"> 0909 717 983</a>.</p>
        <br />
        <CTA />
        <br />
      </Col>
    </Row>
  )
}

export default AccessoryPage
