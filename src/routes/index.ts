import { getAllArticlesMeta } from "@lib/cms"


/** @type {import('./__types/[slug]').RequestHandler} */
export async function get() {
	const articles = await getAllArticlesMeta(3)

    return {
        body: {
            articles
        }
    }


}
