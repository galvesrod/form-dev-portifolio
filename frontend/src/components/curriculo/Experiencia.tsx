export default function Experiencia() {
    return (
        <div className="
                flex flex-col sm:flex-row lg:flex-col items-center justify-around 
                gap-6 p-6 bg-black rounded-2xl border border-zinc-800
                lg:w-80">
            <Item principal="Desenvolvedor Frontend" label="Empresa XYZ - Jan 2020 até o presente" />
            <Item principal="Estagiário de Desenvolvimento" label="Empresa ABC - Jun 2018 até Dez 2019" />
            <Item principal="Projetos Freelance" label="Diversos clientes - 2017 até o presente" />
        </div>
        
    )
}

function Item(props: {principal: string, label:string}){
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6 text-center">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}