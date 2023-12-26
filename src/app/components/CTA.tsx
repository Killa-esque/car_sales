import { Col, Row, Button, Tooltip } from 'antd'
import { CarFilled, PhoneFilled, InfoCircleFilled } from '@ant-design/icons'
import React from 'react'
import Link from 'next/link'

type Props = {}

const CTA = (props: Props) => {
    return (
        <>
            <Row justify="space-evenly">
                <Col span={12}>
                    <div style={{ textAlign: 'center' }}>
                        <Link href='/service/policy'>
                            <Button type='primary' size='large' icon={<CarFilled />}>
                                Bảo hành
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{ textAlign: 'center' }}>
                        <Link href='/service/accessory'>
                            <Button type='primary' size='large' icon={<InfoCircleFilled />} >
                                Phụ tùng
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row justify="center">
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Tooltip placement="top" title={<>STĐ:<a href="tel:0909686116"> 0909.686.116</a></>}>
                            <Button type='primary' size='large' icon={<PhoneFilled />}>
                                <a href="tel:0909686116">Liên hệ dịch vụ</a>
                            </Button>
                        </Tooltip>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CTA
