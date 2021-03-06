export default class StarWarsApi {
    _model = '';

    async getResource(url) {
        const urlPrefix = 'https://swapi.dev/api/'; // 'https://smeshchankin.github.io/swapi/api/'
        const urlSuffix = '/'; // '.json'
        const path = urlPrefix + url + urlSuffix;
        const res = await fetch(path);
        if (!res.ok) {
            throw new Error(`getResource issue: url = ${path}, status = ${res.status}`);
        }
        return await res.json();
    }

    async getList() {
        return this.getResource(this._model).then((json) => json.results);
    }

    async getById(id) {
        return this.getResource(this._model + '/' + id);
    }
}
