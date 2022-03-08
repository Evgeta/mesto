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

//Закрытие попапа при нажатии Escape
function keyDown(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}


//Добавление слушателя на нажатие клавиш
function addEscapeListner() {
  document.addEventListener('keydown', keyDown);
}

//Удаление слушателя на нажатие клавиш
function removeEscapeListner() {
  document.removeEventListener('keydown', keyDown);
}

/*Функция открытия попапа*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  addEscapeListner();
}

/*Функция закрытия попапа*/
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  removeEscapeListner();
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


/*Реализация закрытия попапа по нажатию на оверлэй*/

const addCloseFormOnClickOwerlay = (popupSelector) => {

  //Формируем массив форм документа. Критерий выбора - класс формы
  const popupList = Array.from(document.querySelectorAll(popupSelector));

  /*Для каждой формы добавляем слушатель на оверлей*/
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', function (evt) {
      closePopup(evt.target);
    });
  });
};

addCloseFormOnClickOwerlay('.popup');
