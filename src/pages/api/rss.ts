import type { NextApiRequest, NextApiResponse } from 'next';
import RSS from 'rss';

import manifest from '../../../public/manifest.json';
import { getBlogList } from '../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;
  const feed = new RSS({
    title: `${defaultTitle} blogs`,
    description: `Welcome to ${defaultTitle} blog posts`,
    site_url: manifest.start_url,
    feed_url: `${manifest.start_url}/rss.xml`,
    image_url: manifest.icons[0].src,
    pubDate: new Date()
  });
  const blogs = await getBlogList();

  for (const blog of blogs) {
    feed.item({
      title: blog.title,
      description: blog.description,
      categories: blog.categories,
      author: defaultTitle,
      url: `${manifest.start_url}/blogs/${blog.id}`,
      guid: blog.id.toString(),
      date: blog.date
    });
  }

  response.status(200).end(feed.xml());
}

export default handler;
