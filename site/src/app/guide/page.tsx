import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import fs from 'fs'
import path from 'path'

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'public', 'guide', 'guide.md')
  const markdownContent = fs.readFileSync(filePath, 'utf8')

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          br: () => <br />,
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}