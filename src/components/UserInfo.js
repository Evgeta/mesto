export default class UserInfo {
  constructor(userNameSelector, aboutSelector, avatarSelector) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
    console.log(this._name);
    console.log(this._about);
    console.log(this._avatar);
  }

  setUserInfo(data) {

    console.log('setUserInfo(data)');
    console.log(data);

    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;

  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }
}

/*
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



*/
