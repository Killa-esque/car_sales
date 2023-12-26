import { Row, Col, Collapse, Skeleton } from 'antd'
import React from 'react'
import type { CollapseProps } from 'antd';

type Props = {}

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <b>Làm thế nào để tôi có thể liên hệ với nhân viên CSKH của Volkswagen Sài Gòn?</b>,
    children:
      <div style={{ fontWeight: 'normal' }}>
        <p>Để liên hệ với nhân viên CSKH của Volkswagen Sài Gòn theo các cách sau:</p>
        <ol>
          <li style={{ listStyleType: "none" }}>
            <ol>
              <li>
                Gọi đến số điện thoại cố định của Công ty TNHH Ô Tô VW Sài Gòn:
                <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:02873006786">
                  {" "}(028) 7300 6786{" "}
                </a>
                - nhân viên Lễ Tân sẽ hướng dẫn điều chuyển cuộc gọi của Quý Khách đến nhân viên CSKH.
              </li>
              <li>
                Liên hệ qua địa chỉ email: <a href="mailto:CSKH@vwsaigon.vn" style={{ color: "#001e50", fontWeight: 'bold' }}>
                  CSKH@vwsaigon.vn
                </a>
              </li>
              <li>Liên hệ trực tiếp đến các số:
                <ul>
                  <li>
                    Hotline Kinh Doanh: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0908422666">0908.422.666</a>
                  </li>
                  <li>
                    Hotline Dịch Vụ: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a>
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>
      </div>,
  },
  {
    key: '2',
    label: <b>Nếu tôi làm mất chìa khóa xe hoặc chìa khóa xe của tôi bị hỏng?</b>,
    children: <p>
      Vì mục đích bảo mật, các chìa khóa chỉ có thể được lấy trực tiếp qua các đại lý của Volkswagen tại địa phương của Quý Khách. <br />
      Khi đến nhận chìa khoá dự phòng, Quý Khách vui lòng xuất trình CMND/CCCD và giấy chứng nhận sở hữu xe. Thời gian giao hàng là khoảng 28 ngày.
    </p>,
  },
  {
    key: '3',
    label: <b>Tôi có được phép sử dụng tên hoặc logo của Volkswagen cho công ty, dự án hoặc tổ chức từ thiện của mình không?</b>,
    children: <p>
      Việc sử dụng tên “Volkswagen”, “VW”, “VW trong hình tròn” và logo của Volkswagen là tài sản đã được đăng ký và bảo vệ bởi Volkswagen AG (có trụ sở tại Wolfsburg, Đức).<br />
      Bất kì ai muốn sử dụng những tài sản này đều phải được sự đồng ý của Volkswagen AG. Mọi hành vi sử dụng những tài sản này mà chưa có sự đồng ý của Volkswagen AG đều có thể dẫn đến việc truy đòi pháp lý.
    </p>,
  },
  {
    key: '4',
    label: <b>Showroom Volkswagen Sài Gòn ở đâu?</b>,
    children: <div>
      <p>
        Quý Khách có thể tìm đường đi để đến showroom Volkswagen Sài Gòn
        <a
          style={{ color: "#001e50", fontWeight: 'bold' }}
          href="https://www.google.com/maps/dir//Xe+Volkswagen+Mi%E1%BB%81n+Nam,+682A+Tr%C6%B0%E1%BB%9Dng+Chinh,+Ph%C6%B0%E1%BB%9Dng+15,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.8084808,106.6324926,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x317529c3e7d97e2d:0x8999af7a59912f66!2m2!1d106.6343864!2d10.8086549"
          target="_blank" rel="noopener">
          tại đây
        </a>
        .
      </p>
      <p>Hoặc liên hệ trực tiếp đến các số hotline để được hướng dẫn cụ thể:</p>
      <ul>
        <li>
          Hotline Kinh Doanh: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0908422666">0908.422.666</a>
        </li>
        <li>
          Hotline Dịch Vụ: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a>
        </li>
      </ul>
    </div>,
  },
  {
    key: '5',
    label: <b>Các model xe của Volkswagen được sản xuất tại những quốc gia nào?</b>,
    children:
      <div>
        <p>Các dòng xe của Volkswagen được sản xuất cại các nước:</p>
        <ul>
          <li>
            Bỉ: Golf
          </li>
          <li>
            Đức: Golf, Golf Plus, Passat, Passat Estate, Touran, Tiguan, Phaeton
          </li>
          <li>
            Mexico: Jetta, New Beetle, New Beetle Cabriolet
          </li>
          <li>
            Tây Ban Nha: Polo
          </li>
          <li>
            Slovakia: Touareg
          </li>
        </ul>
      </div>
  },
  {
    key: '6',
    label: <b>Kênh Youtube của Volkswagen Sài Gòn là gì? Tôi có thể xem video của Volkswagen Sài Gòn ở đâu?</b>,
    children:
      <p>
        Quý Khách có thể đăng ký kênh Youtube của Volkswagen Sài Gòn{" "}
        <a
          style={{ color: '#001e50', fontWeight: 'bold' }}
          href="https://www.youtube.com/channel/UCoF1TFVmbDdJexZWjoJciQg"
          target="_blank" rel="noopener"
        >tại đây</a>
        . Các video mới nhất về các sản phẩm, mẹo vặt sẽ hữu ích cho Quý Khách.
      </p>,
  },
  {
    key: '7',
    label: <b>Fanpage Volkswagen Sài Gòn là gì?</b>,
    children: <p>
      Quý Khách có thể cập nhật những thông tin mới nhất và những cập nhật khuyến mãi sớm nhất từ trang Fanpage của Volkswagen Sài Gòn{" "}
      <a
        style={{ color: '#001e50', fontWeight: 'bold' }}
        href="https://www.facebook.com/vwsaigonofficial"
        target="_blank" rel="noopener"
      >tại đây</a>.
    </p>,
  },
  {
    key: '8',
    label: <b>Cách để tắt chuông cảnh báo trên xe Volkswagen</b>,
    children:
      <p>
        Chuông cảnh báo trên xe được lắp đặt trên xe nhằm mục đích bảo mật và an toàn đối với người sử dụng. <br />
        Vì vậy, để đảm bảo sự an toàn, Quý Khách hãy mang xe đến đại lý Volkswagen 4S chính hãng gần nhất để được các nhân viên tư vấn hướng dẫn thêm.
      </p>,
  },
  {
    key: '9',
    label: <b>Điều gì sẽ xảy ra khi xe của tôi hết bảo hành?</b>,
    children: <p>
      Quý khách có thể mua thêm gói gia hạn thời gian bảo hành cho chiếc xe của mình, vui lòng liên hệ với Đại lý gần nhất hoặc liên hệ với Volkswagen Sài Gòn (hotline dịch vụ: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a>) để được hướng dẫn chi tiết.
    </p>,
  },
  {
    key: '10',
    label: <b>Cách nhận biết xe đã qua sử dụng nằm trong trường hợp triệu hồi (Recall)?</b>,
    children: <p>Quý khách có thể kiểm tra thông tin xe bằng cách nhập Số khung (số VIN) của chiếc xe đã qua sử dụng trên công cụ trực tuyến DVSA (Driver and Vehicle Standards Agency) để tham khảo các xe triệu hồi.</p>,
  },
  {
    key: '11',
    label: <b>Tôi có phải chi trả chi phí cho xe Volkswagen bị triệu hồi (Recall) không?</b>,
    children: <p>Mọi chi phí liên quan đến việc triệu hồi đều do Volkswagen chịu trách nhiệm.</p>,
  },
  {
    key: '12',
    label: <b>Đại lý Volkswagen Sài Gòn có dịch vụ sửa xe lưu động (Mobile Service) không?</b>,
    children: <div>
      Ở Volkswagen Sài Gòn hiện đang có dịch vụ Mobile Service – chúng tôi luôn mong đem lại sự tiện lợi và sự phục tận tình đến với Quý Khách.
      Mọi chi tiết liên hệ hotline: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a>
    </div>
  },
  {
    key: '13',
    label: <b>Cách lái xe tiết kiệm nhiên liệu và có thể bảo vệ môi trường?</b>,
    children: <div>
      <p>Quý Khách có thể áp dụng một số mẹo sau để có thể tiết kiệm nhiên liệu và bảo vệ môi trường:</p>
      <ol>
        <li>Lái xe với vận tốc ổn định vì việc tăng tốc và phanh đột ngột có ảnh hướng rất lớn đến mức tiêu thụ nhiên liệu.</li>
        <li>Giảm trọng tải.</li>
        <li>Thường xuyên kiểm tra lốp với độ căng đến áp suất chính xác.</li>
        <li>Sử dụng điều hoà không khí một cách tiết kiệm.</li>
      </ol>
    </div>
  },
  {
    key: '14',
    label: <b>Cụm từ "4 Motion" trên xe Volkswagen có nghĩa là gì?</b>,
    children: <p>"4 Motion" là hệ dẫn động bốn bánh do Volkswagen phát triển, nghĩa là lực từ động cơ sẽ phân phối lên các bánh thích hợp tuỳ theo điều kiện thích hợp, đảm bảo xe có độ bám đường tốt và ổn định hơn. Hệ này mang đến lợi thế khi lái xe trên đường.</p>,
  },
  {
    key: '15',
    label: <b>Tính năng hỗ trợ đỗ xe (Park Assist) có thể được trang bị bổ sung không?</b>,
    children: <p>Chúng tôi rất tiếc, tính năng hỗ trợ đỗ xe không thể được trang bị bổ sung thêm trên xe. Nhưng có thể được trang bị thêm cảm biến khoảng cách đỗ xe. Vui lòng liên hệ với Đại lý gần nhất hoặc có thể liên hệ hotline dịch vụ: <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a> để được tư vấn và hỗ trợ.</p>,
  },
  {
    key: '16',
    label: <b>Số VIN trên xe Volkswagen có ý nghĩa gì? Cách để tìm số VIN trên xe Volkswagen?</b>,
    children: <div>
      <p>VIN (Vehicle Idenfication Number) có nghĩa là số nhận dạng xe và đôi khi được gọi là số khung.</p>
      <p>Quý Khách có thể tìm thấy số VIN trên xe của mình tại vị trí dưới cùng bên phải của mặt trước kính chắn gió.</p>
      <p>Số VIN sẽ có dạng như sau: “<b>WVWZZZ3CZKE123456</b>“</p>
    </div>,
  },
  {
    key: '17',
    label: <b>Nếu tôi không dùng xe thường xuyên, bình ắc quy có bị ảnh hưởng gì không?</b>,
    children: <p>Hệ thống quản lý năng lượng ắc quy của Volkswagen tự động đảm bảo đủ năng lượng để khởi động động cơ, dựa trên trạng thái sạc ắc quy và nhiệt độ. Nó được thiết kế để có hiệu quả ngay cả khi chiếc xe không được sử dụng trong một thời gian dài.</p>,
  },
  {
    key: '18',
    label: <b>Tôi có thể mua phụ tùng xe Volkswagen ở đâu?</b>,
    children: <p>Quý Khách vui lòng liên hệ với Đại lý Volkswagen gần nhất hoặc liên hệ hotline dịch vụ của Volkswagen Sài Gòn <a style={{ color: "#001e50", fontWeight: 'bold' }} href="tel:0909686116">0909.686.116</a> để được tư vấn và hỗ trợ.</p>,
  },
  {
    key: '19',
    label: <b>Áp suất lốp khuyến cáo với xe Volkswagen là bao nhiêu?</b>,
    children: <p>Quý Khách có thể tìm thấy thông tin về áp suất lốp được khuyến cáo cho xe ở bên trong nắp đậy nhiên liệu hoặc trên nhãn dán trên cột phía sau của trình điều khiển.</p>,
  },
];

const FAQPage = (props: Props) => {
  return (
    <>
      <Row style={{ marginTop: 150, marginBottom: 150 }}>
        <Col span={12} offset={6}>
          <h1 style={{ textAlign: 'center' }}>
            QUÝ KHÁCH THƯỜNG HỎI...
          </h1>
          <Collapse style={{marginTop: 50}} defaultActiveKey={['1']} ghost items={items} accordion />
        </Col>
      </Row>
    </>
  )
}

export default FAQPage
