import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export interface CarrosselImagensProps {
    imagens: string[];
}

export function CarrosselImagens({ imagens }: CarrosselImagensProps) {
    return (
        <Carousel 
            className="w-7/10 md:w-11/12 xl:w-full"
            opts={{loop: true}} >
            <CarouselContent>
                {imagens.map((imagem)=>(
                    <CarouselItem key={imagem} className="relative h-96 w-full" >
                        <Image src={imagem} alt={"Imagem"} fill className="object-cover"/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}