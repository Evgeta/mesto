import {Card} from "./Card.js";
import {
  FormValidator
} from "./FormValidator.js";

import {
  openPopup, closePopup
} from "./utils.js";

import {
  initialCards
} from '../utils/constants.js';

/*Блок работы с попапом редактирования профиля*/
const profile = document.querySelector(".profile");
const profieNameEditButton = profile.querySelector(".profile__name-edit-btn");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const editProfileForm = popupEditProfile.querySelector(".popup__form");
const profileNameValue = profile.querySelector(".profile__name");
const profileAboutValue = profile.querySelector(".profile__about-me");
const inputName = popupEditProfile.querySelector(".popup__input_type_name");
const inputAbout = popupEditProfile.querySelector(".popup__input_type_about");

/*Функция открывает попап редактирования профиля*/
function openEditProfilePopup() {
  fillProfilePopupValues();
  openPopup(popupEditProfile);
}

/*Функция закрывает попап редактирования профиля*/
function closeEditProfilePopup() {
  closePopup(popupEditProfile);
}

/*Функция наполнения полей попапа редактирования профиля текщеми значениями из html*/
function fillProfilePopupValues() {
  inputName.value = profileNameValue.textContent;
  inputAbout.value = profileAboutValue.textContent;
}

/*Функция подтверждения данных из формы*/
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameValue.textContent = inputName.value;
  profileAboutValue.textContent = inputAbout.value;
  closeEditProfilePopup();
}

/*Слушатель на всплывание попапа*/
profieNameEditButton.addEventListener("click", openEditProfilePopup);

/*Слушатель на подтверждение формы*/
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

/*Блок динамического добавления карточек*/

const gallery = document.querySelector('.gallery');

//отрисовка карточки в галлерее
function renderGalleryItem(card, container, place = 'before') {
  if (place === 'after') container.append(card)
  else container.prepend(card);
}

//отрисовка галлереи
function renderGallery() {
  initialCards.forEach(item => {
    const card = new Card(item.name, item.link, '#gallery__item');
    const galleryItem = card.getElement();
    renderGalleryItem(galleryItem, gallery, 'after');
  })
}

/*Отрисовка галлереи в начальном состоянии*/
renderGallery();

/*Отображение формы для новой карточки*/
const placeAddButton = profile.querySelector(".profile__add-btn");
const popupNewPlace = document.querySelector(".popup_new-place");
const addPlaceForm = popupNewPlace.querySelector(".popup__form");

/*Функция открывает попап добавления места*/
function openAddPlacePopup() {
  openPopup(popupNewPlace);
}

/*Функция закрывает попап добавления места*/
function closeAddPlacePopup() {
  closePopup(popupNewPlace);
}

const inputCardName = popupNewPlace.querySelector(".popup__input_type_name");
const inputCardLink = popupNewPlace.querySelector(".popup__input_type_link");

/*Функция подтверждения данных из формы добавления*/
function handleAddPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newplace = {
    name: "",
    link: ""
  }
  newplace.name = inputCardName.value;
  newplace.link = inputCardLink.value;

  //добавление карточки
  const card = new Card(newplace.name, newplace.link, '#gallery__item');
  const galleryItem = card.getElement();
  renderGalleryItem(galleryItem, gallery, 'before');

  //закрытие модального окна
  closeAddPlacePopup();
  //очистка формы
  addPlaceForm.reset();
  newPlaceValidator.disableButton();

}

/*Обработчики попапа на добавление нового места*/

/*Слушатель на всплывание попапа на добавление места*/
placeAddButton.addEventListener("click", openAddPlacePopup);

/*Слушатель на подтверждение формы*/
addPlaceForm.addEventListener("submit", handleAddPlaceFormSubmit);

/*Реализация закрытия попапа по нажатию на оверлэй и закрытия по нажатию на крестик*/
const handleMouseDownOnOverlayAndCrossButton = (popupSelector) => {

  //Формируем массив форм документа. Критерий выбора - класс формы
  const popupList = Array.from(document.querySelectorAll(popupSelector));

  popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) { //обработка нажатия левой кнопки мыши по оверлею
        closePopup(popupElement);
      }
      if (evt.target.classList.contains('popup__close-btn')) { //обработка нажатия левой кнопки мыши по кнопке-крестику
        closePopup(popupElement)
      }
    });
  })
}

handleMouseDownOnOverlayAndCrossButton('.popup');

const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const formList = Array.from(document.querySelectorAll(validationObject.formSelector));
const newPlaceValidator = new FormValidator(validationObject, formList[1]);
const editProfileValidator = new FormValidator(validationObject, formList[0]);

const enableValidation = () => {
  newPlaceValidator.enableValidation();
  editProfileValidator.enableValidation();
};

enableValidation();
