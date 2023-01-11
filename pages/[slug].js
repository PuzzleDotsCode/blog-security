import Head from 'next/head'
import { MDXRemote } from "next-mdx-remote"
import { getFilesBySlug, getFiles } from "../lib/mdx"
import Navigation from '../components/Navigation'


export default function Post({ source, frontmatter }) {
    return (
        <>
            <Head>
                <title>hatori's blog</title>
                <meta name="description" content="The Audit point of view of life, Ethical Hacking and White Hat mindset." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

            <MDXRemote {...source} />

        </>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFilesBySlug(params.slug)

    return {
        props: { source, frontmatter }
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}