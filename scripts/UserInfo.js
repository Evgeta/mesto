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

/*
  constructor(nameSelector, subSelector, avatar) {
    this._userName = document.querySelector(nameSelector);
    this._aboutInfo = document.querySelector(subSelector);
    this._avatar = document.querySelector(avatar);
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._aboutInfo.textContent = data.about;
    this._avatar.src = data.avatar
  }

  getUserInfo() {
   return {
     name: this._userName.textContent,
     about: this._aboutInfo.textContent
   }
  }

  setUserAva(data) {
    this._avatar.src = data.avatar
  }

*/
}
