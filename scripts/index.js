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

/*Блок работы с попапом редактирования профиля*/
const profile = document.querySelector(".profile");
const profieNameEditButton = profile.querySelector(".profile__name-edit-btn");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const editProfileCloseButton = popupEditProfile.querySelector(".popup__close-btn");
const editProfileForm = popupEditProfile.querySelector(".popup__form");
const profileNameValue = profile.querySelector(".profile__name");
const profileAboutValue = profile.querySelector(".profile__about-me");
const inputName = popupEditProfile.querySelector(".popup__input_type_name");
const inputAbout = popupEditProfile.querySelector(".popup__input_type_about");

/*Функция открытия попапа*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

/*Функция закрытия попапа*/
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/*Функция открывает попап редактирования профиля*/
function openEditProfilePopup() {
  openPopup(popupEditProfile);
  fillProfilePopupValues();
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
function formEditProfileSubmit(evt) {
  evt.preventDefault();
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

/*Список карточек после возможной модификации*/
const cards = initialCards.slice();
const gallery = document.querySelector('.gallery');
const galleryItemTemplate = document.querySelector('#gallery__item').content;

//Создание слушателей
function setEventListenersOnGalleryItems(galleryItem) {
  galleryItem.querySelector(".gallery__delete-icon").addEventListener("click", deleteCard);
  galleryItem.querySelector(".gallery__heart").addEventListener("click", setLike);
  galleryItem.querySelector(".gallery__image").addEventListener("click", showBigImage);
}

//Удаление слушателей
function removeEventListenersOnGalleryItems(galleryItem) {
  galleryItem.querySelector(".gallery__delete-icon").removeEventListener("click", deleteCard);
  galleryItem.querySelector(".gallery__heart").removeEventListener("click", setLike);
  galleryItem.querySelector(".gallery__image").removeEventListener("click", showBigImage);
}

function setLike(evt) {
  evt.target.classList.toggle("gallery__heart_active");
}

function createCard(item) {
  // клонируем содержимое тега template
  const galleryItem = galleryItemTemplate.querySelector(".gallery__item").cloneNode(true);
  // наполняем содержимым
  galleryItem.querySelector(".gallery__image").src = item.link;
  galleryItem.querySelector(".gallery__image").alt = item.name;
  galleryItem.querySelector(".gallery__place-name").textContent = item.name;
  //создаем слушателей на карточке
  setEventListenersOnGalleryItems(galleryItem);
  return galleryItem;
}

function renderGalleryItem(card, container, place = 'before') {
  if (place === 'after') container.append(card)
  else container.prepend(card);
}

function renderGallery() {
  initialCards.forEach(item => {
    renderGalleryItem(createCard(item), gallery, 'after');
  })
}

/*Функция удаления карточки*/
function deleteCard(evt) {
  const cardElement = evt.target.closest(".gallery__item");
  removeEventListenersOnGalleryItems(cardElement);
  cardElement.remove();
}

/*Отрисовка галлереи в начальном состоянии*/
renderGallery();

/*Отображение формы для новой карточки*/
const placeAddButton = profile.querySelector(".profile__add-btn");
const popupNewPlace = document.querySelector(".popup_new-place");
const addPlaceCloseButton = popupNewPlace.querySelector(".popup__close-btn");
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
function formAddPlaceSubmit(evt) {
  evt.preventDefault();
  const newplace = {
    name: "",
    link: ""
  }
  newplace.name = inputCardName.value;
  newplace.link = inputCardLink.value;
  inputCardName.value = "";
  inputCardLink.value = "";
  //добавим карточку в массив
  renderGalleryItem(createCard(newplace), gallery);
  closeAddPlacePopup();
}

/*Обработчики попапа на добавление нового места*/

/*Слушатель на всплывание попапа на добавление места*/
placeAddButton.addEventListener("click", openAddPlacePopup);
/*Слушатель на закрытие попапа*/
addPlaceCloseButton.addEventListener("click", closeAddPlacePopup);
/*Слушатель на подтверждение формы*/
addPlaceForm.addEventListener("submit", formAddPlaceSubmit);

/*Открытие попапа с увеличенной картинкой*/
const popupBigImage = document.querySelector(".popup_big-image");
const showBigImageCloseButton = popupBigImage.querySelector(".popup__close-btn");
const imageOnForm = popupBigImage.querySelector(".popup__big-image");
const imageCaption = popupBigImage.querySelector(".popup__image-caption");

function showBigImage(evt) {
  imageOnForm.src = evt.target.src;
  imageOnForm.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;
  openPopup(popupBigImage);
}

/*Функция закрывает попап большой картинка*/
function closeBigImagePopup() {
  closePopup(popupBigImage);
}

/*Слушатель на закрытие попапа отображения большой картинки*/
showBigImageCloseButton.addEventListener("click", closeBigImagePopup);
