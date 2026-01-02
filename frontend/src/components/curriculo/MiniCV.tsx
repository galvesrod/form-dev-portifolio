import Image from "next/image";

export default function MiniCV(){
    return(
        <div className="
            flex lg:flex-col-reverse xl:flex-row flex-1 
            lg:items-center xl:items-start gap-6
            bg-black rounded-2xl border border-zinc-800 px-6 pt-6">
            <div className="relative min-w-72 h-64 xl:self-end">
                <Image src={"/minha-foto.png"} alt={"Foto"} fill/>
            </div>
            <div className="flex flex-col gap-6 self-center py-6 xl:items-start lg:items-center">
                <div className="flex flex-col text-center items-center md:items-start lg:items-center xl:items-start">
                    <span 
                        className="bg-linear-to-r from-red-500 via-white to-white
                                    bg-clip-text text-transparent text-2xl font-bold">
                        Gabriel Alves</span>
                    <span>Desenvolvedor Frontend</span>
                </div>
                <p className=" text-sm text-center md:text-left lg:text-center xl:text-left">
                    Apaixonado por tecnologia e desenvolvimento web, com experiência em criação de interfaces
                    modernas e responsivas. Sempre em busca de aprendizado contínuo e novos desafios na área.
                </p>
            </div>
        </div>
    )
}