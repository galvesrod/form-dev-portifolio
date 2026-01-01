import { Projeto } from "@core";
import ItemProjeto from "./ItemProjeto";

export interface ProjetoProps {
    titulo: string
    lista: Projeto[];
}

export default function Projetos({ titulo, lista }: ProjetoProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold text-white/70">{titulo}</h3>
            <div className="flex gap-4 flex-wrap">
                {lista.map((projeto) => (
                    <ItemProjeto key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </div>
    );
}