import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';

import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';



import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector,
  profileBlockSelector,
  profilePopupSelector,
  userinfo,
  profieNameEditButton,
  profileSelector,
  profile,
  profileNameEditButtonSelector,
  profileNameEditButton,
  inputName,
  inputAbout,
  validationObject,
  formProfile
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
  popupSelector: profilePopupSelector,
  handleFormSubmit: () => {
    user.setUserInfo(popupProfile._getInputValues());
    popupProfile.close();
  }
})

popupProfile.setEventListeners();

//создание слушателя для кнопки редактирования профиля

profileNameEditButton.addEventListener('click', () => {
  const {name, about} = user.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  //formEditProfileValidator.toggleButtonState();
  popupProfile.open();
})

//создание класса валидации
const formEditProfileValidator = new FormValidator(validationObject, formProfile);
//включение валидации в форме редактирования профиля
formEditProfileValidator.enableValidation();
