'use client'
import ConteudoMD from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import Image from "next/image"
import { useState } from "react"


export default function Chat(){
    const {chatId, mensagens, adicionarMensagem,limparMensagens, pensando} = useChat()
    const [texto, setTexto] = useState("")
    
    return (
        <div>
            <h1>chat</h1>
            <h2>ChatID: {chatId}</h2>
            <button onClick={limparMensagens}>Limpar</button>

            <ul>
                {mensagens.map(mensagem => (
                    <li key={mensagem.id} className="flex flex-col gap-2">
                        <div>{mensagem.autor}:</div>
                        <ConteudoMD markdown={mensagem.texto}/>

                    </li>
                ))}
            </ul>
            {
                pensando && (
                    <div>
                        <Image src={"/pensando.gif"} width={50} height={50} alt="Pensando" />
                    </div>
                )
            }
            <input type="text" 
                className="border border-zinc-800 rounded p-2"
                value={texto} 
                onChange={(e: any)=> setTexto(e.target.value)}
                onKeyDown={(e: any)=> {
                    setTexto(e.target.value)
                    if(e.key === "Enter"){
                        adicionarMensagem(texto)
                        setTexto("")
                    }
                }}
            />
        </div>
    )
}