import React from 'react'
import { getProduct, renderOptions } from '@/app/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Col, Row } from 'antd'

type Props = { params: any }

const ProductDetailPage = async (props: Props) => {

    const product = await getProduct(props.params.slug)

    console.log(product);

    return (
        <>
            <div>{product.model}</div>
            <div>{product.price}</div>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 4 }} xl={{ span: 12, offset: 6 }}>
                    {documentToReactComponents(product.content.json, renderOptions(product.content.links))}
                </Col>
            </Row>
        </>
    )
}

export default ProductDetailPage
