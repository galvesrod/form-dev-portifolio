import { Tecnologia } from "@core";

export interface TecnologiasTrabalhadasProps{
    tecnologias: Tecnologia[]
}


export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps){
    return props.tecnologias ? (
        <div className="flex justify-center 
                items-center p-6 w-full lg:w-72 
                bg-black rounded-2xl border border-zinc-800">
            <div className="flex justify-center gap-x-3 flex-wrap">
                {props.tecnologias.map((tecnlogia) => (
                    <div key={tecnlogia.id}>
                        <span className="text-red-500 font-bold">#</span>
                        <span>{tecnlogia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    )
    : null
}