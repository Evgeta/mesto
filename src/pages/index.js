import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector,
  profilePopupSelector,
  userinfo,
  profileNameEditButton,
  inputName,
  inputAbout,
  validationObject,
  formProfile,
  addPlaceSelector,
  placeAddButton,
  formAddPlace,
  bigImageSelector,
  baseUrl,
  token
} from '../utils/constants.js';


//инициализация API

const api = new Api({
  baseUrl: baseUrl,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});


//создание карточек и соответствующих им элементов

//функция создания новой карточки
const createNewCard = (item) => {
  const newCard = new Card({
    data: item,
    handleCardClick: () => {
      popupWithImg.open(item);
    }
  }, galleryItemTemplateSelector);

  return newCard.getElement();
}

const cardsList = new Section({
   //  items: initialCards,
   // items: initialCardsFromServer,
    renderer: (item) => {
      cardsList.addItem(createNewCard(item));
    }
  },
  gallerySelector
);


console.log(cardsList);

//Запрос на получение карточек

api.getInitialCards()
.then((cardsFromServer) => {
  cardsList.renderItems(cardsFromServer);
})
.catch((err) => {
 console.log(`Ошибка в api.getInitialCards(): ${err.status}`)
})


//текущая информация о пользователе
const user = new UserInfo(userinfo.userNameSelector, userinfo.aboutSelector);

//создание попапа для редактирования профиля пользователя

const popupProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (userData) => {
    user.setUserInfo(userData);
    popupProfile.close();
  }
})

popupProfile.setEventListeners();

//создание класса валидации
const formEditProfileValidator = new FormValidator(validationObject, formProfile);
//включение валидации в форме редактирования профиля
formEditProfileValidator.enableValidation();


//создание слушателя для кнопки редактирования профиля
profileNameEditButton.addEventListener('click', () => {
  const {
    name,
    about
  } = user.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
})

//добавление новой карточки
const popupAddPlace = new PopupWithForm({
  popupSelector: addPlaceSelector,
  handleFormSubmit: (imageData) => {
    cardsList.addItem(createNewCard(imageData));
    popupAddPlace.close();
  }
})

popupAddPlace.setEventListeners();

//создание слушателя для кнопки добавления нового места
placeAddButton.addEventListener('click', () => {
  formAddPlaceValidator.toggleButtonState();
  popupAddPlace.open();
})

//создание класса валидации
const formAddPlaceValidator = new FormValidator(validationObject, formAddPlace);
//включение валидации в форме добавления места
formAddPlaceValidator.enableValidation();

//попап с картинкой
const popupWithImg = new PopupWithImage(bigImageSelector);
popupWithImg.setEventListeners();
