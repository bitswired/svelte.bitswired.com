import { getAllArticlesMeta } from "@lib/cms"


/** @type {import('./__types/[slug]').RequestHandler} */
export async function get() {
	const articles = await getAllArticlesMeta(20)

    return {
        body: {
            articles
        }
    }


}
