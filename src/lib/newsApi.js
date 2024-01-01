// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const NEWS_GRAPHQL_FIELDS = `
sys {
  id
}
contentfulMetadata {
  tags {
    id
    name
  }
}
title
slug
summary
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
  }
}
date
thumbnail {
  sys {
    id
  }
  url
  title
  description
}
authorName
`;

const NEWS_PREVIEW_GRAPHQL_FIELDS = `
sys {
    id
}
contentfulMetadata {
    tags {
      id
      name
    }
  }
title
slug
summary
authorName
date
thumbnail {
    sys {
      id
    }
    url
    title
    description
}
`

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
            next: { tags: ["articles"] },
        }
    ).then((response) => response.json());
}

function extractNewsEntries(fetchResponse) {
    return fetchResponse?.data?.newsCollection?.items;
}

export async function getAllNews(
    // For this demo set the default limit to always return 3 articles.
    limit = 6,
    skip = 0,
    // By default this function will return published content but will provide an option to
    // return draft content for reviewing articles before they are live
    isDraftMode = false
) {
    const articles = await fetchGraphQL(
        `query {
        newsCollection(where:{slug_exists: true}, skip: ${skip}, limit: ${limit}, preview: ${isDraftMode ? "true" : "false"
        }) {
          items {
            ${NEWS_PREVIEW_GRAPHQL_FIELDS}
          }
          total
        }
      }`,
        isDraftMode
    );
    return { data: extractNewsEntries(articles), total: articles?.data?.newsCollection?.total };
}

export async function getNews(
    slug,
    isDraftMode = false
) {
    const news = await fetchGraphQL(
        `query {
        newsCollection(where:{slug: "${slug}"}, limit: 9, preview: ${isDraftMode ? "true" : "false"
        }) {
          items {
            ${NEWS_GRAPHQL_FIELDS}
          }
        }
      }`,
        isDraftMode
    );
    return extractNewsEntries(news)[0];
}