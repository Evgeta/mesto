export default class Card {

  constructor({
    data,
    handleCardClick,
    currentUser, 
    handleDeleteButtonClick,
    setLike,
    removeLike
  }, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._templateSelector = templateSelector;
    this._id = data._id;
    this._currentUser = currentUser;
    this._cardOwner = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._setLike = setLike;
    this._removeLike = removeLike;
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

    //заполняем количество лайков
    this._element.querySelector(".gallery__like-count").textContent = this._likes;

    //если текущий пользователь уже ставил лайк - подсвечиваем седечко
    this._likedByCurrentUser();

    //если текущий пользователь - владелец катрочки - отображаем кнопку удаления карточки 
    if (this._cardOwner === this._currentUser) {
      this._element.querySelector('.gallery__delete-icon').classList.remove('gallery__delete-icon_hidden')
    }


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

  _toggleLike() {
    this.classList.toggle('gallery__heart_active');
  }

  _setEventListeners() {
    this._element.querySelector(".gallery__delete-icon").addEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").addEventListener("click", this._toggleLike);
    this._element.querySelector(".gallery__image").addEventListener("click", this._handleCardClick);
  }

  _removeEventListeners() {
    this._element.querySelector(".gallery__delete-icon").removeEventListener("click", this._removeCard);
    this._element.querySelector(".gallery__heart").removeEventListener("click", this._setLike);
    this._element.querySelector(".gallery__image").removeEventListener("click", this._handleCardClick);
  }

//поставить лайк
_setLike(data) {
  this._element.querySelector(".gallery__heart").classList.add('gallery__heart_active');
  this._element.querySelector('.gallery__like_count').textContent = this._calcLikesNumber(data);
}

//посчитать обновленное количество лайков
_calcLikesNumber(data) {
  this._likes = String(data.likes.length);
  return this._likes
}

//удалить лайк
_removeLike(data) {
  this._element.querySelector(".gallery__heart").classList.remove('gallery__heart_active');
  this._element.querySelector('.gallery__like_count').textContent = this._calcLikesNumber(data);
}

//если текущий пользователь уже ставил лайк
_likedByCurrentUser() {
  this._data.likes.forEach((likeOwner) => {
    if (likeOwner._id === this._currentUser) {
      this._element.querySelector(".gallery__heart").classList.add('gallery__heart_active');
    }
  })
}

}
