export default class StarWarsApi {
    async getResource(url) {
        const urlPrefix = 'https://smeshchankin.github.io/swapi/api/'; // 'https://swapi.dev/api/'
        const urlSuffix = '.json'; // '/'
        const path = urlPrefix + url + urlSuffix;
        const res = await fetch(path, { mode: 'no-cors' });
        if (!res.ok) {
            throw new Error(`getResource issue: url = ${path}, status = ${res.status}`);
        }
        return await res.json();
    }
};
