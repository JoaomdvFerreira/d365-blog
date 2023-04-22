import { useHeadings } from '@/lib/hooks/useHeadings'

const TableOfContents = () => {
  const headings = useHeadings()

  return (
    <div className="hidden lg:block">
      <div className="mb-4 flex items-center gap-4 mt-3">
        📑
        <div>Table of contents</div>
      </div>
      <div>
        {headings.map((heading) => {
          const { id, level, title } = heading

          return (
            <a
              key={id}
              href={`#${id}`}
              className={
                'block border-l-2 border-l-zinc-300 pb-[10px] pr-[10px] pt-[10px] text-sm leading-[1.2] text-accent-5 transition-all duration-300 hover:text-hong-fg dark:border-l-zinc-700'
              }
              style={{
                paddingLeft: (level - 1) * 16,
              }}
            >
              {title}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default TableOfContents
