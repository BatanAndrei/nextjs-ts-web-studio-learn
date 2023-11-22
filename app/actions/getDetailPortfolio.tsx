export function getDetailPortfolio(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());
}