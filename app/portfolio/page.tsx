"use client"

import { ItemsByGroup, PortfolioItem } from '../types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<PortfolioItem[] | null>(null);
    const { push } = useRouter();

    const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos/';

    //const prepareData = (data) => data; 
    
    /* const load = async () => {
        try {
            const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
            const prepared = prepareData(data.slice(0, 7));
            setItems(prepared);
            console.log(prepared)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }; */

    async function getData() {
        const res = await fetch(PHOTOS_API_URL);
        return res.json();
        }
    
        async function Page() {
        const data = await getData();
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