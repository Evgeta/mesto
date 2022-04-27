export default class UserInfo {

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
