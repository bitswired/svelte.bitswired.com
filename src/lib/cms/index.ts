export async function getAllArticlesMeta(limit: number) {
	const query = `query {
        articles(sort: ["publishedAt:desc:"], pagination: {limit: ${limit}}) {
            data {
                id
                attributes {
                  title
                  description
                  titleImage
                  readMinutes
                  slug
                  tags {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  serie {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  category {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  createdAt
                  updatedAt
                  publishedAt
                }
              }
            }
	}`

	const res = await fetch('https://bitswired-340618.ew.r.appspot.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
		},
		body: JSON.stringify({
			query
		})
	})

	const { data, errors } = await res.json()
	return data.articles.data
}

export async function getArticleBySlug(slug: string) {
	const query = `query {
	  articles(filters: {slug: {eq: "${slug}"}}) {
        data {
            id
            attributes {
              title
              titleImage
			  description
			  readMinutes
              data
              slug
              tags {
                data {
                  attributes {
                    name
                  }
                }
              }
              category {
                data {
                  attributes {
                    name
                  }
                }
              }
              serie {
                data {
                  attributes {
                    name
                  }
                }
              }
              createdAt
              updatedAt
              publishedAt
              body {
                __typename
                ... on ComponentRichContentCodeBlockGroup {
                  blocks {
                    url  
                    language {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                    code
                  }
                  collapsable
                  title
                }
                ... on ComponentRichContentFigure {
                  caption
                  media
                  ratio
                }
                ... on ComponentRichContentBasicRichBlock {
                  content
                }
                ... on ComponentRichContentColoredBlock {
                  type
                  textContent: content
                }
              }
            }
          }
        }
	}`

	const res = await fetch('https://bitswired-340618.ew.r.appspot.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`
		},
		body: JSON.stringify({
			query
		})
	})

	const { data, errors } = await res.json()
	return data.articles.data[0]
}
