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

  //получение карочек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })

      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      }
    })
    .then((res) => this._checkResponse(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
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
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
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
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  setLike(data) {
    console.log('Отправка запроса на увеличение количества лайков');
    console.log(data._id);
    return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  removeLike(data) {
    console.log('Отправка запроса на уменьшение количества лайков');
    console.log(data._id);
    return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  setAvatar(data) {
    console.log('Отправка запроса на установку нового аватара');
    console.log(data._id);
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((res) => this._checkResponse(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }



}
