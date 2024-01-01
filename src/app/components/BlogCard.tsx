'use client'
import React from 'react';
import { Card } from 'antd';
import { Media } from '../type/ContentfulType';
import Link from 'next/link';

type Props = {
    thumbnail: Media,
    title: string,
    hrefUrl: string,
    description: string,
}

const { Meta } = Card;

const BlogCard = ({ thumbnail, title, hrefUrl, description }: Props) => (
    <Link href={hrefUrl}>
        <Card
            bordered={false}
            hoverable
            cover={
                <div style={{ overflow: "hidden", height: "200px" }}>
                    <img
                        alt={thumbnail.title}
                        style={{ height: "100%", objectFit: 'cover', width: "100%" }}
                        src={thumbnail.url}
                    />
                </div>
            }
        >
            <Meta
                title={title}
                description={description}
            />
        </Card>
    </Link>
);

export default BlogCard;
