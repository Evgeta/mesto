export default class Api {
  constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      console.log(this.baseUrl);
      this.headers = headers;
      this.token = headers.authorization;
      console.log(headers.authorization);
  }

  getInitialCards() {
   // return fetch(`${this._baseUrl}/cards`, {
   //   headers: {
   //     authorization: this._token//,
        //'Content-Type': 'application/json'
   //   }

   return fetch('https://mesto.nomoreparties.co/v1/cohort-40/cards', {
    headers: {
      authorization: 'bf98c7a0-6228-49bd-ba70-b0bb4b987626'
    }
  })


   // })
    .then(res => {
      if (res.ok) {
        console.log(`${res.json()}+все хорошо`);
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

  }

  // другие методы работы с API
}



