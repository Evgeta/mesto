// import {
//   openPopup, popupBigImage, imageOnForm, imageCaption
// } from "./utils.js";


/*Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick.
Эта функция должна открывать попап с картинкой при клике на карточку.*/

export default class Card {

  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._removeEventListeners();
    this._element.remove();
    this._element = null;
  }

  /*Открытие попапа с увеличенной картинкой*/
  /*
  _showBigImage = () => {
    imageOnForm.src = this._link;
    imageOnForm.alt = this._name;
    imageCaption.textContent = this._name;
    openPopup(popupBigImage);
  }*/

  _toggleLike() {
    this.classList.toggle('gallery__heart_active');
  }

  _setEventListeners() {
    this._element.querySelector(".gallery__delete-icon").addEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").addEventListener("click", this._toggleLike);
    this._element.querySelector(".gallery__image").addEventListener("click", this._showBigImage);
  }

  _removeEventListeners() {
    this._element.querySelector(".gallery__delete-icon").removeEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").removeEventListener("click", this._setLike);
    this._element.querySelector(".gallery__image").removeEventListener("click", this._showBigImage);
  }
}
