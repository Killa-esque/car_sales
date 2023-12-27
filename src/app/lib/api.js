// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed

import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const PRODUCT_GRAPHQL_FIELDS = `
    sys {
        id
    }
    model
    slug
    price
    thumbnail {
        url
        description
    }
    content {
        json
        links {
          assets {
            block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
          }
        }
    }
    brochure {
        url
        description
    }
    overviewSection
    colorsCollection {
        items {
            url
            description
        }
    }
    mediasCollection {
        items {
            url
            description
        }
    }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractProductsEntries(fetchResponse) {
  return fetchResponse?.data?.productCollection?.items;
}

export async function getAllProducts(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  skip = 0,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        productCollection(where:{slug_exists: true}, skip: ${skip}, limit: ${limit}, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${PRODUCT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractProductsEntries(articles);
}

export async function getProduct(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        productCollection(where:{slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${PRODUCT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractProductsEntries(article)[0];
}

export function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <img src={asset.url} alt="My image alt text" />
        );
      },
    },
  };
}