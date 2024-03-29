import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <span className="mr-3 text-sm font-medium uppercase text-primary-color hover:text-blue-600 dark:hover:text-yellow-300 dark:text-primary-color-dark">
        {text.split(' ').join('-')}
      </span>
    </Link>
  )
}

export default Tag
