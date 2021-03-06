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
export const formProfile = document.querySelector('.popup__change-profile-form');

//константы, связанные с добавлением новой карточки
export const addPlaceSelector = '.popup_new-place';
export const placeAddButton = profile.querySelector('.profile__add-btn'); //кнопка добавления места
export const popupNewPlace = document.querySelector(addPlaceSelector); //блок добавления карточки
export const formAddPlace = popupNewPlace.querySelector('.popup__form'); //форма добавления места


//блок констант, связанных с отображением большой картинки при нажатии/блок констант, связанных с отображением большой картинки при нажатии
export const bigImageSelector = '.popup_big-image';


//настройка доступа к API
export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-40';
export const token = 'bf98c7a0-6228-49bd-ba70-b0bb4b987626';

//селекторы информации о пользователе

export const userNameSelector = '.profile__name';
export const userAboutSelector = '.profile__about-me';
export const userAvatarSelector = '.profile__avatar';

//константы, связанные с добавлением новой карточки
export const deleteCardPopupSelector = '.popup_delete-card';

//селектор попапа обновления автара
export const popupChangeAvatarSelector = '.popup_change-avatar';

//форма редактирования ссылки на аватар
export const formChangeAvatar = document.querySelector('.popup__change-avatar-form');

//селектор кнопки редактирования аватара
export const avatarEditButtonSelector = '.profile__avatar-pen';

//ссылка на кнопку редактирвания аватара
export const avatarEditButton = profile.querySelector(avatarEditButtonSelector);

