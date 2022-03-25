import { openPopup  } from './index.js';

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  getElement() {
    //клонируем содержимое тега template
    this._element = document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);

    //наполняем атрибуты изображения
    const cardImage = this._element.querySelector('.gallery__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    //наполняем значением подпись
    this._element.querySelector(".gallery__place-name").textContent = this._name;

    //создаем слушателей
    this._setEventListeners();
    return this._element;
  }

  //удаление карточки
  _removeCard = () => {
    this._element.remove();
  }

  _showBigImage = (evt) => {
    this._element.remove();
    /*Открытие попапа с увеличенной картинкой*/
    const popupBigImage = document.querySelector(".popup_big-image");
    const imageOnForm = popupBigImage.querySelector(".popup__big-image");
    const imageCaption = popupBigImage.querySelector(".popup__image-caption");

    imageOnForm.src = evt.target.src;
    imageOnForm.alt = evt.target.alt;
    imageCaption.textContent = evt.target.alt;
    openPopup(popupBigImage);
  }

  _toggleLike() {
    this.classList.toggle('gallery__heart_active');
  }

  _setEventListeners() {

    const deleteIcon = this._element.querySelector(".gallery__delete-icon");

    this._element.querySelector(".gallery__delete-icon").addEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").addEventListener("click", this._toggleLike);
    this._element.querySelector(".gallery__image").addEventListener("click", (evt) => {this._showBigImage(evt)});
  }

  _removeEventListeners() {
    this._element.querySelector(".gallery__delete-icon").removeEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").removeEventListener("click", this._setLike);
    this._element.querySelector(".gallery__image").removeEventListener("click", (evt) => {this._showBigImage(evt)});
  }
}
