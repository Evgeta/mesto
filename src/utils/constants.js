/*Список карточек в начальном состоянии*/
export const initialCards = [{
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];


export const galleryItemTemplateSelector = '#gallery__item'; //шаблон элемента галлерие - карточки
export const gallerySelector = '.gallery'; //селектор элемента галерея
export const profilePopupSelector = '.popup_edit-profile'; //селектор блока профиля


//информация о пользователе на странице
export const userinfo = {
  userNameSelector: '.profile__name',
  aboutSelector: '.profile__about-me'
}


/*Константы связанные с информацией в профиле*/

//селектор секции профиля на странице
export const profileSelector = '.profile';

//профиль пользователя на странице
export const profile = document.querySelector(".profile");

//селектор кнопки редактирования профиля
export const profileNameEditButtonSelector = '.profile__name-edit-btn';
//ссылка на кнопку редактирвания профиля
export const profileNameEditButton = profile.querySelector(profileNameEditButtonSelector);

//информация о пользователе в попапе редактирования профиля в инпутах
export const inputName = document.querySelector('.popup__input_type_name');
export const inputAbout = document.querySelector('.popup__input_type_about');

//настройка объекта валидации
export const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

//форма редактирования профиля
export const formProfile = Array.from(document.querySelectorAll(validationObject.formSelector))[0];

//константы, связанные с добавлением новой карточки
export const addPlaceSelector = '.popup_new-place';
export const placeAddButton = profile.querySelector('.profile__add-btn'); //кнопка добавления места
export const popupNewPlace = document.querySelector(addPlaceSelector); //блок добавления карточки
export const formAddPlace = popupNewPlace.querySelector('.popup__form'); //форма добавления места


//блок констант, связанных с отображением большой картинки при нажатии/блок констант, связанных с отображением большой картинки при нажатии
export const bigImageSelector = '.popup_big-image';
