export default class Card {

  constructor({
    data,
    handleCardClick,
    currentUser,
    handleDeleteButtonClick,
    setLike,
    removeLike
  }, templateSelector) {
    this.data = data;
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
    this._cardImage = this._element.querySelector('.gallery__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    //ищем и запоминаем элемент, отображающий название места
    this._placeName = this._element.querySelector(".gallery__place-name");
    //наполняем значением подпись
    this._placeName.textContent = this._name;


    //ищем и сохраняем элемент, отображающий количество лайков
    this._galleryLikeCount = this._element.querySelector(".gallery__like-count");
    //заполняем количество лайков
    this._galleryLikeCount.textContent = this._likes;

    //ищем элемент, отображающий сердечко лайка
    this._galleryHeart = this._element.querySelector('.gallery__heart');

    //если текущий пользователь уже ставил лайк - подсвечиваем седечко
    this._likedByCurrentUser();

    //ищем и запоминаем элемент - кнопка уделаения
    this._deleteButton = this._element.querySelector('.gallery__delete-icon');

    //если текущий пользователь - владелец катрочки - отображаем кнопку удаления карточки
    if (this._cardOwner === this._currentUser) {
      this._deleteButton.classList.remove('gallery__delete-icon_hidden')
    }

    //создаем слушателей
    this._setEventListeners();
    return this._element;
  }

  //удаление карточки
  removeCard = () => {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", this._handleDeleteButtonClick);
    this._cardImage.addEventListener("click", this._handleCardClick);
    this._galleryHeart.addEventListener('click', () => {
      if (this._galleryHeart.classList.contains('gallery__heart_active')) {
        this._removeLike()
      } else {
        this._setLike()
      }
    })
  }

  //поставить лайк
  setLike(data) {
    this._galleryHeart.classList.add('gallery__heart_active');
    this._galleryLikeCount.textContent = this._calcLikesNumber(data);
  }

  //посчитать обновленное количество лайков
  _calcLikesNumber(data) {
    this._likes = String(data.likes.length);
    return this._likes
  }

  //удалить лайк
  removeLike(data) {
    this._galleryHeart.classList.remove('gallery__heart_active');
    this._galleryLikeCount.textContent = this._calcLikesNumber(data);
  }

  //если текущий пользователь уже ставил лайк - отрисовка
  _likedByCurrentUser() {
    this.data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._currentUser) {
        this._galleryHeart.classList.add('gallery__heart_active');
      }
    })
  }

}
