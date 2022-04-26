
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
export const profileBlockSelector = '.popup_edit-profile';  //селектор блока профиля


//информация о пользователе на странице
export const userinfo = {
  userNameSelector: '.profile__name',
  aboutSelector: '.profile__about-me'
}


/*Константы связанные с информацие й в профиле*/

//селектор секции профиля на странице
export const profileSelector = '.profile';

//профиль пользователя на странице
export const profile = document.querySelector(".profile");

//селектор кнопки редактирования профиля
export const profileNameEditButtonSelector = '.profile__name-edit-btn';
//ссылка на кнопку редактирвания профиля
export const profileNameEditButton = profile.querySelector(profieNameEditButtonSelector);

//информация о пользователе в попапе редактирования профиля в инпутах
export const inputName = document.querySelector('.popup__input_type_name');
export const inputAbout = profile.querySelector('.popup__input_type_about');






