import React from 'react'
import { Col, Row } from 'antd'
import RenderRichText from '@/app/components/RenderRichText'
import { getNews } from '@/lib/newsApi'
import './page.css'
import { News } from '@/app/type/ContentfulType'
import HeadersFromRichText from '@/app/components/HeadersFromRichText'

type Props = { params: any }

const NewsDetailPage = async (props: Props) => {

    const news: News = await getNews(props.params.slug)

    return (
        <>
            <Row style={{ marginTop: 20, marginBottom: 20 }}>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 2, offset: 2 }} xl={{ span: 3, offset: 3 }} style={{ marginTop: 50 }}>
                    <HeadersFromRichText content={news.content} />
                </Col>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 18 }} xl={{ span: 12 }}>
                    <div className='news__container'>
                        <RenderRichText content={news.content} />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default NewsDetailPage
