const profile = document.querySelector(".profile");
const profieNameEditButton = profile.querySelector(".profile__name-edit-btn");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const editProfileCloseButton = popupEditProfile.querySelector(".popup__close-btn");
const editProfileForm = popupEditProfile.querySelector(".popup__form");

/*Функция открывает попап редактирования профиля*/
function openEditProfilePopup() {
  const popupEditProfile = document.querySelector(".popup_edit-profile");
  popupEditProfile.classList.add("popup_opened");
  fillProfilePopupValues();
}

/*Функция закрывает попап редактирования профиля*/
function closeEditProfilePopup() {
  const popupEditProfile = document.querySelector(".popup_edit-profile");
  popupEditProfile.classList.remove("popup_opened");
}

/*Функция наполнения полей попапа редактирования профиля текщеми значениями из html*/
function fillProfilePopupValues() {
  const profileNameValue = profile.querySelector(".profile__name");
  const profileAboutValue = profile.querySelector(".profile__about-me");
  const inputName = popupEditProfile.querySelector(".popup__input_type_name");
  const inputAbout = popupEditProfile.querySelector(".popup__input_type_about");
  inputName.value = profileNameValue.textContent;
  inputAbout.value = profileAboutValue.textContent;
}

/*Функция подтверждения данных из формы*/
function formEditProfileSubmit(evt) {
  evt.preventDefault();
  const profileNameValue = profile.querySelector(".profile__name");
  const profileAboutValue = profile.querySelector(".profile__about-me");
  const inputName = popupEditProfile.querySelector(".popup__input_type_name");
  const inputAbout = popupEditProfile.querySelector(".popup__input_type_about");
  profileNameValue.textContent = inputName.value;
  profileAboutValue.textContent = inputAbout.value;
  closeEditProfilePopup();
}

/*Слушатель на всплывание попапа*/
profieNameEditButton.addEventListener("click", openEditProfilePopup);
/*Слушатель на закрытие попапа*/
editProfileCloseButton.addEventListener("click", closeEditProfilePopup);
/*Слушатель на подтверждение формы*/
editProfileForm.addEventListener("submit", formEditProfileSubmit);

/*Блок динамического добавления карточек*/

/*Список карточек в начальном состоянии*/
const initialCards = [{
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

/*Список карточек после возможной модификации*/
const cards = initialCards.slice();
const gallery = document.querySelector('.gallery');
const galleryItemTemplate = document.querySelector('#gallery__item').content;

function setEventListenersOnGalleryItems(galleryItem) {
  galleryItem.querySelector(".gallery__delete-icon").addEventListener("click", deleteCard);
  galleryItem.querySelector(".gallery__heart").addEventListener("click", setLike);
  galleryItem.querySelector(".gallery__image").addEventListener("click", showBigImage);
}

function removeEventListenersOnGalleryItems(galleryItem) {
  galleryItem.querySelector(".gallery__delete-icon").removeEventListener("click", deleteCard);
  galleryItem.querySelector(".gallery__heart").removeEventListener("click", setLike);
  galleryItem.querySelector(".gallery__image").removeEventListener("click", showBigImage);
}

function setLike(evt) {
  evt.target.classList.toggle("gallery__heart_active");
}

function renderGalleryItem(item) {
  // клонируем содержимое тега template
  const galleryItem = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  // наполняем содержимым
  galleryItem.querySelector('.gallery__image').src = item.link;
  galleryItem.querySelector('.gallery__image').alt = item.name;
  galleryItem.querySelector('.gallery__place-name').textContent = item.name;
  setEventListenersOnGalleryItems(galleryItem);
  // отображаем на странице
  gallery.append(galleryItem);
}

function renderGallery() {
  cards.forEach(renderGalleryItem);
}

/*Функция удаления карточки*/
function deleteCard(evt) {
  const cardElement = evt.target.closest(".gallery__item");
  removeEventListenersOnGalleryItems(cardElement);
  cardElement.remove();
}

renderGallery();

/*Отображение формы для новой карточки*/
const placeAddButton = profile.querySelector(".profile__add-btn");
const popupNewPlace = document.querySelector(".popup_new-place");
const addPlaceCloseButton = popupNewPlace.querySelector(".popup__close-btn");
const addPlaceForm = popupNewPlace.querySelector(".popup__form");

/*Функция открывает попап добавления места*/
function openAddPlacePopup() {
  const popupNewPlace = document.querySelector(".popup_new-place");
  popupNewPlace.classList.add("popup_opened");
}

/*Функция закрывает попап добавления места*/
function closeAddPlacePopup() {
  const popupNewPlace = document.querySelector(".popup_new-place");
  popupNewPlace.classList.remove("popup_opened");
}

/*Функция подтверждения данных из формы добавления*/
function formAddPlaceSubmit(evt) {
  evt.preventDefault();
  const newplace = {
    name: "",
    link: ""
  }
  const inputName = popupNewPlace.querySelector(".popup__input_type_name");
  const inputLink = popupNewPlace.querySelector(".popup__input_type_link");
  newplace.name = inputName.value;
  newplace.link = inputLink.value;
  inputName.value = "";
  inputLink.value = "";
  //добавим карточку в массив
  cards.unshift(newplace);
  closeAddPlacePopup();
  removeOldCards();
  renderGallery();
}

/*Обработчики попапа на добавление нового места*/

/*Слушатель на всплывание попапа на добавление места*/
placeAddButton.addEventListener("click", openAddPlacePopup);
/*Слушатель на закрытие попапа*/
addPlaceCloseButton.addEventListener("click", closeAddPlacePopup);
/*Слушатель на подтверждение формы*/
addPlaceForm.addEventListener("submit", formAddPlaceSubmit);

function removeOldCards() {
  const cardElements = gallery.querySelectorAll(".gallery__item");
  const cardElementsArray = Array.from(cardElements);
  cardElementsArray.forEach(item => item.remove());
}

/*Открытие попапа с увеличенной картинкой*/
const popupBigImage = document.querySelector(".popup_big-image");
const showBigImageCloseButton = popupBigImage.querySelector(".popup__close-btn");

function showBigImage(evt) {
  const popupBigImage = document.querySelector(".popup_big-image");
  const imageOnForm = popupBigImage.querySelector(".popup__big-image");
  imageOnForm.src = evt.target.src;
  imageOnForm.alt = evt.target.alt;
  const imageCaption = popupBigImage.querySelector(".popup__image-caption");
  imageCaption.textContent = evt.target.alt;
  popupBigImage.classList.add("popup_opened");
}

/*Слушатель на закрытие попапа отображения большой картинки*/
showBigImageCloseButton.addEventListener("click", closeBigImagePopup);

/*Функция закрывает попап большой картинка*/
function closeBigImagePopup() {
  popupBigImage.classList.remove("popup_opened");
}
