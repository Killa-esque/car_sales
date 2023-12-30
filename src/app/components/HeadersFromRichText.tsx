import { BLOCKS } from '@contentful/rich-text-types';
import { Content } from '@/app/type/ContentfulType';
import { Anchor } from 'antd';
import slugify from 'slugify'

export function getPlainTextFromHeader(contentNode: any) {
    return contentNode.reduce((acc: any, current: any) => {
        return acc + current.value
    }, '')
}

function getHeadersFromRichText(richText: any) {
    const headers = (content: any) => content.nodeType === BLOCKS.HEADING_2
    const res = [{
        key: '0',
        title: <b>Tóm tắt nội dung</b>,
        href: `#tableOfContents`,
    }].concat(richText.content.filter(headers).map((heading: any, index: any) => {
        const plainText = getPlainTextFromHeader(heading.content)

        return {
            key: index,
            title: plainText,
            href: `#${slugify(plainText)}`,
        }
    }))

    return res;
}


export type PropsType = {
    content: Content
}

const HeadersFromRichText = ({ content }: PropsType) => {

    return (
        <>
            <Anchor
                style={{ marginTop: 110 }}
                targetOffset={100}
                items={
                    getHeadersFromRichText(content.json)
                }
            />
        </>
    )
}

export default HeadersFromRichText
