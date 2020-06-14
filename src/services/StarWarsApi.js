export default class StarWarsApi {
    async getResource(url) {
        const baseURL = 'https://swapi.dev/api/';
        const path = baseURL + url + '/';
        const res = await fetch(path, { mode: 'no-cors' });
        if (!res.ok) {
            throw new Error(`getResource issue: url = ${path}, status = ${res.status}`);
        }
        return await res.json();
    }
};
