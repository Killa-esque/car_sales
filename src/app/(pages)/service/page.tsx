import { Col, Row } from 'antd'
import React from 'react'
import CTA from '@/app/components/CTA'

type Props = {}

const ServicePage = (props: Props) => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 4 }} xl={{ span: 12, offset: 6 }}>
        <h1 style={{ textAlign: 'center' }}>DỊCH VỤ</h1>
        <p>
          Volkswagen được biết đến là hãng ô tô nổi tiếng nhất thế giới.
          Không chỉ về số lượng xe bán ra trên toàn Thế Giới mà còn dịch vụ hậu mãi tuyệt vời.
          Chọn mua một chiếc Volkswagen thì bạn đã khởi đầu một mối tương quan thân thiết và lâu dài với dịch vụ hậu mãi chính hãng và chuyên nghiệp.
        </p>
        <p>
          Volkswagen Sài Gòn vô cùng tự hào mang đến xưởng dịch vụ đạt tiêu chuẩn toàn cầu đầu tiên ở Việt Nam.
          Với hơn 2000m2 diện tích sàn bao gồm 10 khoang bảo dưỡng và sửa chữa chung cùng với khu vực thân vỏ.
          Phòng sơn đạt tiêu chuẩn Volkswagen toàn cầu. Toàn bộ khu vực dịch vụ đều được trang bị các máy móc chuẩn đoán hiện đại theo tiêu chuẩn kết nối mạng Volkswagen toàn cầu.
          Volkswagen Sài Gòn cung cấp cho quý khách hàng dịch vụ bảo dưỡng 02 năm và không giới hạn kilomet.
        </p>
        <br />
        <p>
          Đội ngũ các chuyên viên kỹ thuật do chính hãng đào tạo, đáp ứng các nhu cầu khách hàng.
          Chất lượng của dịch vụ hậu mãi luôn đạt tiêu chuẩn cao nhất. Đáp ứng đầy đủ về nhu cầu phụ tùng, cũng như đồ trang trí cho xe.
          Khách hàng được trực tiếp phản hồi ý kiến về dịch vụ hậu mãi thông qua đường dây nóng.
        </p>
        <br />
        <p>
          Linh kiện và phụ tùng luôn sẵn sàng trong kho hàng, giá cả niêm yết.
          Volkswagen Sài Gòn mang đến sự chuyên nghiệp trong giao tiếp, báo giá và sử dụng dịch vụ hậu mãi.
          Volkswagen Sài Gòn luôn nỗ lực phát triển để dẫn đầu trong dịch vụ hậu mãi.
          Khách hàng hoàn toàn yên tâm khi đến với dịch vụ hậu mãi của Volkswagen Sài Gòn.
        </p>
        <br />
        <CTA />
        <br />
      </Col>
    </Row>
  )
}

export default ServicePage
