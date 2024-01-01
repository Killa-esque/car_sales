import React from 'react';
import { Product } from '@/app/type/ContentfulType';
import { getProduct } from '@/lib/productApi';
import { Col, Row } from 'antd';
import RenderRichText from '@/app/components/RenderRichText';
import { Image } from 'antd';
import './page.css';
import { CheckCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Props = { params: { slug: string } };

const ProductDetailPage = async ({ params }: Props) => {
  const { slug } = params;

  const product: Product = await getProduct(slug);

  console.log(product)

  const { model, price, overviewSection, colorsCollection, thumbnail, brochure, mediasCollection, content } = product;


  return (
    <>
      <section className="about_page">
        <div className="container">
          <div className="about-top text-center mb-5">
            <h1 className="title text-uppercase">{model}</h1>
          </div>
          <div className="about-bottom">
            <div className="row">
              <div className="col-lg-6 content-left">
                <h3 className="title">
                  The Best Choice For Your Successful Business!
                </h3>
                <p className="mt-3 mb-lg-5 mb-4 desc">{thumbnail.description}</p>
                <ul className="about-list">
                  <li className="about-item"><CheckCircleOutlined /> GIÁ SAU KHUYẾN MÃI TỪ: {price}</li>
                  <li className="about-item"><CheckCircleOutlined /> Vay 0% lãi suất</li>
                  <li className="about-item"><CheckCircleOutlined /> Giảm 100% Phí đăng kí</li>
                  <li className="about-item"><CheckCircleOutlined /> Ưu đãi tiền mặt hấp dẫn</li>
                  <li className="about-item"><CheckCircleOutlined /> Tặng voucher dịch vụ trị giá 50 triệu</li>
                  <li className="about-item"><CheckCircleOutlined /> Tặng thẻ 7 đặc quyền sau mua chỉ có tại VW Sài Gòn</li>
                  <li className="about-item"><CheckCircleOutlined /> Tặng ngay 5 năm bảo dưỡng</li>
                  <li className="about-item"><CheckCircleOutlined /> Tặng ngay gói trang bị tuỳ chọn Luxury Accessories</li>
                  <li className="about-item"><CheckCircleOutlined /> Tặng gói phim cách nhiệt 3M của Mỹ</li>
                  <li className="about-item"><CheckCircleOutlined /> Gói bảo hiểm thân xe</li>
                  <li className="about-item"><CheckCircleOutlined /> Bộ quà tặng lưu niệm VW Sài Gòn</li>
                </ul>
              </div>
              <div className="col-lg-6 content-thumbnail mt-lg-0 mt-5">
                <Image src={thumbnail.url} width={'100%'} height={'100%'} alt={thumbnail.title} style={{ backgroundSize: 'cover' }} />
              </div>
            </div>
          </div>
          <div className='about-spec'>

          </div>
        </div>
      </section>

      <section className='brochure'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='brochure-left'>
            <hr />
          </div>
          <div className='brochure-middle'>
            <Link href={brochure.url} target='_blank'>
              <h4 className='title'>Tải Brochure</h4>
            </Link>
          </div>
          <div className='brochure-right'>
            <hr />
          </div>
        </div>
      </section>






      <section className='container'>
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 22 }} xl={{ span: 22 }}>
            <div className='news__container'>
              <RenderRichText content={product.content} />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ProductDetailPage;
