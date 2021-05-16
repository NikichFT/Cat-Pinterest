export class FetchCats {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._key = config.key
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getCatList = () => {
        return fetch(`${this._url}/images/search?limit=10&_page=10`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._key
            }
        })
            .then(this._checkResult)
    }

    getSavedCat = () => {
        return fetch(`${this._url}/favourites`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._key
            }
        })
            .then(this._checkResult)
    }

    likeCat = (catId) => {
        return fetch(`${this._url}/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._key
            },
            body: JSON.stringify({
                image_id: catId
            })
        })
            .then(this._checkResult)
    }

    unlikeCat = (catId) => {
        return fetch(`${this._url}/favourites/${catId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._key
            }
        })
            .then(this._checkResult)
    }


}

const fetchCats = new FetchCats({
    url: 'https://api.thecatapi.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '30271cfe-da2e-4b5c-bde0-32813f78a055'
    },
    key: '30271cfe-da2e-4b5c-bde0-32813f78a055'
})

export default fetchCats