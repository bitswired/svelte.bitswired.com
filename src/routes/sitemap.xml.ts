import { CONFIG } from "@config"
import { getAllArticlesMeta } from "@lib/cms"
import { SitemapStream, streamToPromise } from "sitemap"



export async function get() {
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }

    const articles = await getAllArticlesMeta(100)
    const slugs = articles.map(article => article.attributes.slug)

    const smStream = new SitemapStream({ hostname: CONFIG.seo.publicUrl})


    smStream.write({ url: '/',  changefreq: 'daily', priority: 0.3 })
    smStream.write({ url: '/blog',  changefreq: 'daily', priority: 0.3 })
    smStream.write({ url: '/about',  changefreq: 'daily', priority: 0.3 })

    slugs.forEach((slug: string) => {
        smStream.write({ url: `/blog/${slug}`,  changefreq: 'daily', priority: 0.3 })
    })

    smStream.end()

    const sm = (await streamToPromise(smStream)).toString()

    return {
        headers,
        body: sm
    }

    
  }