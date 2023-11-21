"use client"

import { ItemsByGroup, PortfolioItem } from '../types';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Portfolio() {

    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

    const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos/';

    const prepareData = (data) => data; 
    

    const load = async () => {
        try {
            const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
            const prepared = prepareData(data.slice(0, 7));
            setItems(prepared);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
        
    useEffect(() => {
        load();
    }, []);

    return (
        <h1>Портфолио</h1>
    )
    }