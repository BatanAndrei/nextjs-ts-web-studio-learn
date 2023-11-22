import { PortfolioItem } from '@/app/types';

export function getDetailPortfolio(id: PortfolioItem) {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());
}