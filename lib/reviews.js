import { readFile, readdir } from 'node:fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8')
  const {
    content,
    data: { title, date, image },
  } = matter(text)
  const body = marked(content)

  return { body, title, date, image, slug }
}

export async function getReviews() {
  const files = await readdir('./content/reviews')
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))

  const reviews = []

  for (const slug of slugs) {
    const review = await getReview(slug)

    reviews.push(review)
  }

  reviews.sort((a, b) => b.date.localeCompare(a.date))

  return reviews
}

export async function getSlugs() {
  const files = await readdir('./content/reviews')
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))

  return slugs
}

export async function getFeaturedReview() {
  const featuredReview = await getReviews()
  console.log('return featured review', featuredReview[0])
  return featuredReview[0]
}
