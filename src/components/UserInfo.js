export class UserInfo {

/*

Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
Принимает в конструктор объект с селекторами двух элементов:
элемента имени пользователя и элемента информации о себе.
Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
 Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
Содержит публичный метод setUserInfo, который принимает новые данные пользователя
 и добавляет их на страницу.
*/


  constructor(userNameSelector, aboutSelector) {
    this._inputName = document.querySelector(userNameSelector);
    this._inputAbout = document.querySelector(aboutSelector);
  }

  setUserInfo(data) {
    this._inputName.textContent = data.name;
    this._inputAbout.textContent = data.about;
  }

  getUserInfo() {
   return {
     name: this._inputName.textContent,
     about: this._inputAbout.textContent
   }
  }
}
