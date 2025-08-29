import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import fs from 'fs'
import path from 'path'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Components } from 'react-markdown'

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'public', 'guide', 'guide.md')
  const markdownContent = fs.readFileSync(filePath, 'utf8')

  const components: Components = {
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
    code: (props: CodeProps) => {
      const {node, inline, className, children, ...rest} = props;
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      const isCodeBlock = className && className.startsWith('language-') || 
                         (typeof children === 'string' && children.includes('\n'));
      
      if (inline || (!isCodeBlock && !className)) {
        return (
          <code className="inline-block bg-slate-800 text-green-400 px-3 py-1 mx-1 rounded font-mono text-sm" {...rest}>
            {children}
          </code>
        );
      } else {
        return (
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={language || 'text'}
            PreTag="div"
            className="rounded-lg text-sm mb-4"
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontSize: '0.875rem'
            }}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
    },
    pre: ({children}) => (
      <div className="mb-4">
        {children}
      </div>
    ),
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
  };

  return (
    <div className="min-h-screen py-8 px-4"
        style={{ 
        backgroundImage: 'url(/assets/bgpath.png)', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl"></div>
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
        <div className="p-8 md:p-12">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm, remarkBreaks]}
              components={components}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-slate-300 text-sm">
          <span>thats it gng, make a board and submit now. RIGHT NOW. I hope I&apos;ve made it clear. RIGHT NOW.</span> </div>
        </div>
      </div>
    </div>
  )
}