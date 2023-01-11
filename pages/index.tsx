import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { getAllFilesMetadata } from "../lib/mdx"

import HtmlHead from "../components/HtmlHead"
import Navigation from "../components/Navigation"

const inter = Inter({ subsets: ['latin'] })

interface PostsArray {
  posts: [
    {
      title: string;
      desc: string;
      tags: string;
      slug: string;
    }
  ]
}

export default function Home({ posts }: PostsArray) {
  return (
    <>
      <HtmlHead/>

      <Navigation/>

      <main className={styles.main}>

        <div className={styles.grid}>

          {
            posts.map(post => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className={styles.card}
                // target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  {post.title}
                </h2>
                <p className={inter.className}>
                  {post.desc}
                </p>
              </Link>
            ))
          }

        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    props: { posts }
  }
}