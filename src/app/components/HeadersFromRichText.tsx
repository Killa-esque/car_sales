import { BLOCKS } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Content } from '@/app/type/ContentfulType';
import { Anchor } from 'antd';
// import { Col, Image, Row } from 'antd';
import slugify from 'slugify'

export function getPlainTextFromHeader(contentNode: any) {
    return contentNode.reduce((acc: any, current: any) => {
        return acc + current.value
    }, '')
}

function getHeadersFromRichText(richText: any) {
    const headers = (content: any) => content.nodeType === BLOCKS.HEADING_2

    return richText.content.filter(headers).map((heading: any, index: any) => {
        const plainText = getPlainTextFromHeader(heading.content)

        return {
            key: index,
            title: plainText,
            href: `#${slugify(plainText)}`,
        }
    })
}


export type PropsType = {
    content: Content
}

const HeadersFromRichText = ({ content }: PropsType) => {
    return (
        <Anchor
            affix={false}
            items={
                getHeadersFromRichText(content.json)
            }
        />
    )
}

export default HeadersFromRichText
