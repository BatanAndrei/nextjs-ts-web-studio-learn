import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from '../../types';


interface ItemProps {
    params: {
        portfolioItem: PortfolioItem;
    }
    
}


export default function Item({ params }: ItemProps) {
    
    return (
        <div>
            <h1>Проект: {params.portfolioItem.title}</h1>
            <Image 
                src={params.portfolioItem.url} 
                width={400} 
                height={400} 
                alt={params.portfolioItem.title} />
            <Link href="/portfolio">Назад к списку работ</Link>
        </div>
    )
}