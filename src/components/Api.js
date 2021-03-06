export default class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = headers.authorization;
  }

  //проверка ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })

      .then((res) => this._checkResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          authorization: this._token,
        }
      })
      .then((res) => this._checkResponse(res))
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      .then((res) => this._checkResponse(res))
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then((res) => this._checkResponse(res))
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then((res) => this._checkResponse(res))
  }

  setLike(data) {
    return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then((res) => this._checkResponse(res))
  }

  removeLike(data) {
    return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then((res) => this._checkResponse(res))
  }

  setAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          avatar: data.avatar
        })
      })
      .then((res) => this._checkResponse(res))
  }



}
