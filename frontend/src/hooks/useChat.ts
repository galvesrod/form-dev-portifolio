'use client'
import Id from "@/lib/Id";
import useLocalStorage from "./useLocalStorage";
import Mensagem from "@/model/Mensagem";
import conversar from "@/functions/chat";
import { useState } from "react";

export default function useChat(){
    const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
    const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])
    const [pensando, setPensando] = useState(false)

    async function adicionarMensagem(texto:string){
        try {
            setPensando(true)
        const novaMenagem: Mensagem = {
            id: Id.gerar(),
            texto,
            autor: "Visitante",
            lado: "direito",
        }
        setMensagens( msgs => [...msgs, novaMenagem])
        
        const resposta = await conversar(chatId, novaMenagem)
        if(!resposta) return

        const mensagemResposta: Mensagem ={
            id: Id.gerar(),
            texto: resposta,
            autor: "Assistente",
            lado: "esquerdo",
        }
        setMensagens( msgs => [...msgs, mensagemResposta])
        } catch (error) {
            
        } finally{
            setPensando(false)
        }
        
    }

    function limparMensagens(){
        setMensagens([])
    }

    return {chatId, mensagens,adicionarMensagem,limparMensagens, pensando}
}