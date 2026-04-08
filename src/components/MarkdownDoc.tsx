import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  title?: string
  markdown: string
  lead?: string
}

export default function MarkdownDoc({ title, markdown, lead }: Props) {
  return (
    <article className="mx-auto w-full max-w-4xl">
      {title ? (
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            {title}
          </h1>
          {lead ? <p className="mt-3 text-gray-700">{lead}</p> : null}
        </div>
      ) : null}

      <div className="space-y-4 text-gray-700">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h2 className="mt-10 text-2xl font-semibold text-gray-900">{children}</h2>
            ),
            h2: ({ children }) => (
              <h3 className="mt-8 text-xl font-semibold text-gray-900">{children}</h3>
            ),
            h3: ({ children }) => (
              <h4 className="mt-6 text-lg font-semibold text-gray-900">{children}</h4>
            ),
            p: ({ children }) => <p className="leading-7 text-gray-700">{children}</p>,
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-amber-800 underline decoration-amber-800/30 underline-offset-4 hover:decoration-amber-800"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            ul: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
            li: ({ children }) => <li className="leading-7">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-amber-900/15 pl-4 text-gray-700">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="rounded bg-white/80 px-1.5 py-0.5 text-sm text-gray-900">
                {children}
              </code>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border-b border-amber-900/10 bg-amber-50/50 px-3 py-2 font-semibold text-gray-900">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border-b border-amber-900/10 px-3 py-2 align-top">{children}</td>
            ),
            hr: () => <hr className="my-10 border-amber-900/10" />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </article>
  )
}
