import { Projeto } from "@core";
import Image from "next/image";
import Link from "next/link";

export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto({ projeto }: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${projeto.id}`} className="block">
            <div className="
                    relative rounded-2xl overflow-hidden border border-zinc-800
                    min-h-64 min-w-64">
                        <Image 
                            src={projeto.imagens[0]} 
                            alt={projeto.nome} 
                            objectFit="object-cover"
                            fill/>

            </div>
        </Link>
    );
}