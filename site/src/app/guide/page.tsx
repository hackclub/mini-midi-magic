import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import fs from 'fs'
import path from 'path'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'public', 'guide', 'guide.md')
  const markdownContent = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button className="bg-white/90 cursor-pointer backdrop-blur-sm text-slate-700 font-semibold px-6 py-3 text-lg hover:bg-white hover:scale-105 transform transition-all duration-300 shadow-lg border border-slate-200/50 flex items-center justify-center gap-2 rounded-xl">
              <ArrowLeft className="w-5 h-5" />
              Back to Homepage
            </Button>
          </Link>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600"></div>
          <div className="p-8 md:p-12">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkBreaks]}
              components={{
                br: () => <br />,
                h1: ({children}) => (
                  <h1 className="text-4xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
                    {children}
                  </h1>
                ),
                h2: ({children}) => (
                  <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({children}) => (
                  <h3 className="text-xl font-medium text-slate-600 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({children}) => (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                code: (props) => {
                  const inline = 'inline' in props && props.inline;
                  return inline ? (
                    <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded font-mono text-sm">
                      {props.children}
                    </code>
                  ) : (
                    <code className="block bg-slate-50 border border-slate-200 text-slate-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      {props.children}
                    </code>
                  );
                },
                ul: ({children}) => (
                  <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({children}) => (
                  <ol className="list-decimal list-inside text-slate-600 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50 text-slate-700 italic mb-4 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                table: ({children}) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-slate-300 rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                th: ({children}) => (
                  <th className="border border-slate-300 px-4 py-2 bg-slate-100 font-semibold text-slate-700">
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className="border border-slate-300 px-4 py-2 text-slate-600">
                    {children}
                  </td>
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
          <span>thats it gng, make a board and submit now. RIGHT NOW. I hope I made it clear. RIGHT NOW.</span> </div>
        </div>
      </div>
    </div>
  )
}