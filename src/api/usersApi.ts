export async function fetchUsers(query: string, page: number, per_page: number, sort: string, order: string) {
    try {
        if(query.length < 3) return [null, []];
        const res = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`);
        if (!res.ok) return [{status: res.status}, null];
        const {items} = await res.json();
        return [null, items];
    } catch (error) {
        return [error, []];
    }
}
