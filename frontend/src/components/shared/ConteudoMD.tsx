import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

export interface ConteudoMDProps{
    markdown: string
}

export default function ConteudoMD({ markdown }: ConteudoMDProps) {
    return (
        <Markdown 
            skipHtml={false}
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]} >
            {markdown}
        </Markdown>
    )
}