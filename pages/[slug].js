import { MDXRemote } from "next-mdx-remote"
import { getFilesBySlug, getFiles } from "../lib/mdx"
import HtmlHead from "../components/HtmlHead"
import Navigation from '../components/Navigation'


export default function Post({ source }) {
    return (
        <>
            <HtmlHead/>

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