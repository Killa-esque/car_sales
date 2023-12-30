import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Links, Content } from '@/app/type/ContentfulType';
import { Col, Image, Row } from 'antd';
import { getPlainTextFromHeader } from './HeadersFromRichText';
import slugify from 'slugify'

function renderOptions(links: Links) {
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
        assetMap.set(asset.sys.id, asset);
    }

    return {
        renderNode: {
            [BLOCKS.HEADING_2]: (node: any, children: any) => {
                const plainText = getPlainTextFromHeader(node.content)

                return <h2 id={slugify(plainText)}>{children}</h2>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
                // find the asset in the assetMap by ID
                const asset = assetMap.get(node.data.target.sys.id);

                // render the asset accordingly
                return (
                    <Row justify={'center'} style={{ marginBottom: 15, marginTop: 15 }}>
                        <Col xs={{ span: 24 }} md={{ span: 22 }} xl={{ span: 18 }}>
                            <Image
                                src={asset.url}
                                alt={asset.title ? asset.title : 'Volkswagen Mien Nam'}
                            />
                        </Col>
                    </Row>
                );
            }
        },
    };
}

export type PropsType = {
    content: Content
}

const RenderRichText = ({ content }: PropsType) => {
    return (
        <>
            {documentToReactComponents(content.json, renderOptions(content.links))}
        </>
    )
}

export default RenderRichText
