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




}
