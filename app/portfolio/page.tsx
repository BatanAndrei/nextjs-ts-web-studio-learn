"use client"

import { PortfolioItem } from '@/app/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { getPortfolio } from '@/app/actions/getPortfolio';

export default async function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<PortfolioItem[] | null>(null);
    const { push } = useRouter();

        async function Page() {
        const data = await getPortfolio();
        setItems(data.slice(0, 7));
        }
        
    useEffect(() => {
        Page();
    }, []);

    return (
        <>
        <h1>Наши работы</h1>

        {itemsByGroup?.length ? (
            <div>
                {itemsByGroup.map((group, i) => (
                <div key={i}>
                    <div key={group.id} onClick={() => push(`/portfolio/${group.id}`)}>
                        <Image src={group.thumbnailUrl} width={150} height={150} alt={group.title} />
                        <h3>{group.title}</h3>
                        <h3>{group.url}</h3>
                    </div>
                </div>
                ))}
            </div>
            ) : <div>Ничего не найдено</div>}
        </>
    )
    }