
export function getPortfolio() {
    return fetch('https://jsonplaceholder.typicode.com/photos/').then(res => res.json());
}