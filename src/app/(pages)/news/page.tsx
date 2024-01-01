import React from 'react'
import { getAllNews } from '@/lib/newsApi'
import { Col, Row } from 'antd';
import { News } from '@/app/type/ContentfulType';
import BlogCard from '@/app/components/BlogCard';
import NewsPagination from '@/app/components/NewsPagination';

type Props = {
  params: any
  searchParams: {
    page: number;
  }
}

export const metadata = {
  title: 'Tin tức',
  openGraph: {
    title: 'Tin tức'
  }
}

const NewsPage = async (props: Props) => {
  const pageSize = 6
  const allNews = await getAllNews(pageSize, props.searchParams.page ? props.searchParams.page * pageSize : 0);

  return (
    <Row style={{ marginTop: 20, marginBottom: 20 }}>
      <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 4 }} xl={{ span: 16, offset: 4 }}>
        <br />
        <h1 style={{textAlign: 'center'}}>Tin tức</h1>
        <br />
        <Row gutter={[16, 25]}>
          {allNews?.data.map((news: News, index: number) => {
            return (
              <Col key={index} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <BlogCard thumbnail={news.thumbnail} title={news.title} description={news.summary} hrefUrl={"/news/" + news.slug} />
              </Col>
            )
          })}
        </Row>
        <Row justify={'center'} style={{ marginBottom: 20, marginTop: 20 }}>
          <Col>
            <NewsPagination total={allNews.total} currentPage={props.searchParams.page ? props.searchParams.page + 1 : 1} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NewsPage
