import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';

import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';



import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector,
  profileSelector,
  userinfo,
  profieNameEditButton
} from '../utils/constants.js';

//созлание карточек и соответствующих им элементов

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({data:item,
      handleCardClick: ()=>{}
    }, galleryItemTemplateSelector);
    const cardElement = card.getElement();
    cardsList.addItem(cardElement);
  }
},
  gallerySelector
);

//начальная отрисовка карточек
cardsList.renderItems();


//текущая информация о пользователе
const user = new UserInfo(userinfo.userNameSelector, userinfo.aboutSelector);

//создание попапа для редактирования профиля пользователя

const popupProfile = new PopupWithForm({
  popupSelector: profileSelector,
  handleFormSubmit: (user) => {
    const data = this._getInputValues();
    user.setUserInfo(data);
    this.close();
  }
})

popupProfile.setEventListeners();

//создание слушателя для кнопки редактирования профиля

profieNameEditButton.addEventListener('click', () => {
  const {name, about} = user.getUserInfo();
  nameInput.value = name;
  inputAbout.value = about;
//  formEditProfile.toggleButtonState()
  popupProfile.open();
})


/*
btnPlus.addEventListener('click', () => {
  formAddCard.toggleButtonState()
  popUpAdd.open()
})
*/

//попап с картинкой
// const popUpWithImg = new PopupWithImage(popupImg)
// popUpWithImg.setEventListeners()

