const popupBigImage = document.querySelector(".popup_big-image");
const imageOnForm = popupBigImage.querySelector(".popup__big-image");
const imageCaption = popupBigImage.querySelector(".popup__image-caption");

//Закрытие попапа при нажатии Escape
function handleEscapeKey(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//Добавление слушателя на нажатие клавиш
function addEscapeListner() {
  document.addEventListener('keydown', handleEscapeKey);
}

//Удаление слушателя на нажатие клавиш
function removeEscapeListner() {
  document.removeEventListener('keydown', handleEscapeKey);
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

export { openPopup, closePopup, handleEscapeKey, addEscapeListner, removeEscapeListner, popupBigImage, imageOnForm, imageCaption}
