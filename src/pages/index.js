import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';

import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
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
  formProfile,
  addPlaceSelector,
  placeAddButton,
  popupNewPlace,
  formAddPlace,
  bigImageSelector
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



//создание новой карточки

//функция создания карточки



//добавление новой карточки

const popupAddPlace = new PopupWithForm({
  popupSelector: addPlaceSelector,
  handleFormSubmit: () => {
   // const {name, about} = user.getUserInfo();
    // cardList.addItem(createNewCard(data))
    //cardList.addItem(createNewCard(data))
    popupAddPlace.close();
    }
  })

  popupAddPlace.setEventListeners();

//создание слушателя для кнопки добавления нового места

  placeAddButton.addEventListener('click', () => {
      //formEditProfileValidator.toggleButtonState();
      popupAddPlace.open();
  })

//создание класса валидации
 const formAddPlaceValidator = new FormValidator(validationObject, formAddPlace);
//включение валидации в форме добавления места
 formAddPlaceValidator.enableValidation();


 //попап с картинкой
const popupWithImg = new PopupWithImage(bigImageSelector);
popupWithImg.setEventListeners();

