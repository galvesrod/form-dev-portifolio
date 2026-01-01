import { Projeto } from "@core";
import { httpGet } from "./api";

export async function obterProjetos(){
    const projetos: Projeto[] = await httpGet('/projetos');

    return {
        todos: projetos,
        get mobile() {
            return projetos.filter(projeto => projeto.tipo  === "mobile");
        },
        get web() {
            return projetos.filter(projeto => projeto.tipo  === "web"); 
        },
        get jogos() {
            return projetos.filter(projeto => projeto.tipo  === "jogo");
        },
        get destaques() {
            return projetos.filter((projeto) => projeto.destaque);
        },
    }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
    return await httpGet(`projetos/${id}`);
}