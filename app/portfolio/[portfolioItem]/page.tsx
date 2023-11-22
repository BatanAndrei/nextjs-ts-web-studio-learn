import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from '@/app/types';
import { getDetailPortfolio } from '@/app/actions/getDetailPortfolio';

interface ItemProps {
    params: {
        portfolioItem: number;
    }
    
}


export default async function PortfolioItem( {params: {portfolioItem} }: ItemProps) {
    const item = await getDetailPortfolio(portfolioItem);
    console.log(item)
    
    return (
        <div>
            <h1>Проект: {item.title}</h1>
            <Image 
                src={item.url} 
                width={400} 
                height={400} 
                alt={item.title} />
            <Link href="/portfolio">Назад к списку работ</Link>
        </div>
    )
}