// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const PRODUCT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  model
  slug
  price
  thumbnail {
    sys {
      id
    }
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
        description
        }       
      }
      entries {
        block {
          sys {
            id
          }
          __typename
          ... on ProductDetail {
            title
            content
            imagesCollection(limit: 10) {
              items {
                sys {
                  id
                }
                title
                url
                description
              }
            }
          }
        }
      }
    }
  }
  brochure {
    sys {
      id
    }
    url
    description
  }
  overviewSection
  colorsCollection {
    items {
      sys {
        id
      }
      url
      title
      description
    }
  }
  mediasCollection {
    items {
      sys {
        id
      }
      url
      title
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