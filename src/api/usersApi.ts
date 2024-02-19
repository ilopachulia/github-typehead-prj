export async function fetchUsers(query: string, page: number, per_page: number, sort: string, order: string) {
    try {

    const res = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`);
    const {items} = await res.json();
    return items;
    }
    catch (error) {
        console.error(error);
    }
    return [];
}