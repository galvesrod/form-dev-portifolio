'use client'

import useChat from "@/hooks/useChat";
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import BalaoMensagem from "./BalaoMensagem";
import Image from "next/image"

export default function JanelaChat(){
    const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")
    const fimChatRef = useRef<HTMLDivElement>(null)

    function enviarMensagem(){
        adicionarMensagem(texto)
        setTexto("")
    }

    useEffect(()=>{
        if(fimChatRef.current){
            fimChatRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    },[mensagens])

    return (
        <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
            <div className="flex justify-between items-center bg-white p-4">
                <h2 className="text-xl font-bold">Ola, Visitante!</h2>
                <IconReload 
                    className="text-black cursor-pointer" 
                    size={24} 
                    onClick={limparMensagens}
                />
            </div>
            {mensagens.length === 0 ? (
                <div className="
                    flex flex-col justify-center items-center 
                    min-h-100 sm:min-h-125"
                >
                    <IconMessages size={230} stroke={0.2} className="text-black/30" />
                    <span>Vamos conversar?</span>
                </div>
                ) : (
                    <div className="
                        flex flex-col p-2 gap-2 
                        min-h-100 sm:min-h-125 
                        max-h-100 sm:max-h-125 
                        overflow-y-scroll">
                        {mensagens.map((mensagem, i)=>{
                                const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
                                return (
                                    <BalaoMensagem 
                                        key={mensagem.id} 
                                        mensagem={mensagem} 
                                        omitirAutor={mesmoAutor}
                                    />
                                )
                            })}
                        {pensando && (
                            <Image src={"/pensando.gif"} width={50} height={50} alt="Pensando" />
                        )}
                        <div ref={fimChatRef}></div>
                    </div>
                )
            }
            <div className="h-px bg-zinc-400 mt-4" />
            <div className="flex items-center gap-2 p-1 rounded-full h-10 bg-white m-4">
                <input type="text" 
                    className="flex-1 bg-transparent h-8 outline-none pl-3"
                    value={texto} 
                    onChange={(e: any)=> setTexto(e.target.value)}
                    onKeyDown={(e: any)=> {
                        setTexto(e.target.value)
                        if(e.key === "Enter") enviarMensagem()
                    }}
                />
                <button 
                    className="flex justify-center items-center min-h-8 min-w-8 
                        rounded-full bg-red-500"
                    onClick={enviarMensagem}>
                    <IconSend className="text-white" size={18}/>

                </button>
            </div>
            
        </div>
    )
}