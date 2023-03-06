import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const joao = await getFileBySlug('authors', ['default'])
  const goncalo = await getFileBySlug('authors', ['goncalo'])
  return { props: { joao, goncalo } }
}

export default function About({ joao, goncalo }) {
  return (
    <>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <MDXLayoutRenderer
        layout={joao.frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={joao.mdxSource}
        frontMatter={joao.frontMatter}
      />
      <MDXLayoutRenderer
        layout={goncalo.frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={goncalo.mdxSource}
        frontMatter={goncalo.frontMatter}
      />
    </>
  )
}
