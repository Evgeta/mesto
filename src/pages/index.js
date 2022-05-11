import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmDeletion from  '../components/PopupConfirmDeletion.js';

import {
  galleryItemTemplateSelector,
  gallerySelector,
  profilePopupSelector,
  profileNameEditButton,
  inputName,
  inputAbout,
  validationObject,
  formProfile,
  addPlaceSelector,
  placeAddButton,
  formAddPlace,
  bigImageSelector,
  baseUrl,
  token,
  deleteCardPopupSelector,
  userNameSelector,
  userAboutSelector,
  userAvatarSelector,
  popupChangeAvatarSelector,
  formChangeAvatar,
  avatarEditButton
} from '../utils/constants.js';


//инициализация API

const api = new Api({
  baseUrl: baseUrl,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

//информация о пользователе на странице
const userOnPage = new UserInfo(userNameSelector, userAboutSelector, userAvatarSelector);

//создание карточек и соответствующих им элементов

//функция создания новой карточки
const createNewCard = (item) => {
  const newCard = new Card({
    data: item,
    handleCardClick: () => {
      popupWithImg.open(item);
    },
    currentUser: user_id,
    handleDeleteButtonClick: () => {
      popupDeleteCard.open();
      popupDeleteCard.submitDelete(() => {
          api.deleteCard(item._id)
        .then(() => {
          newCard.removeCard();
          popupDeleteCard.close()
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        }); //
      }) //
    },
    setLike: () => {
      api.setLike(newCard.data)
      .then((data) => {
        newCard.setLike(data)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      }); //
    },
    removeLike: () => {
      api.removeLike(newCard.data)
      .then((data) => {
        newCard.removeLike(data)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    }
  }, galleryItemTemplateSelector);

  return newCard.getElement();
}

const cardsList = new Section({
    renderer: (item) => {
      cardsList.addItem(createNewCard(item));
    }
  },
  gallerySelector
);


//объявление идентификатора пользователя
let user_id = null;


//Запросы на получение карточек и информации о пользователе

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userInfo, cardsFromServer]) => {
    user_id = userInfo._id;
    userOnPage.setUserInfo(userInfo);
    cardsList.renderItems(cardsFromServer);
})
.catch((err) => {
  console.log(`Ошибка: ${err.status}`)
})


//создание попапа для редактирования профиля пользователя

const popupProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (userData) => {
    popupProfile.renderLoading(true);
    api.setUserInfo(userData)
    .then((res) => {
      userOnPage.setUserInfo(res);
      popupProfile.close();
    })
    .catch((err) => {
     console.log(`Ошибка: ${err.status}`)
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
  }
})

popupProfile.setEventListeners();

//создание класса валидации
const formEditProfileValidator = new FormValidator(validationObject, formProfile);
//включение валидации в форме редактирования профиля
formEditProfileValidator.enableValidation();


//создание слушателя для кнопки редактирования профиля
profileNameEditButton.addEventListener('click', () => {
  const {
    name,
    about
  } = userOnPage.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  formEditProfileValidator.resetValidation();
  popupProfile.open();
})


//создание попапа для редактирования аватара пользователя

const popupChangeAvatar = new PopupWithForm({
  popupSelector: popupChangeAvatarSelector,
  handleFormSubmit: (data) => {
    popupChangeAvatar.renderLoading(true);
    api.setAvatar(data)
    .then((res) => {
      userOnPage.setUserInfo(res);
      popupChangeAvatar.close();
    })
    .catch((err) => {
     console.log(`Ошибка: ${err.status}`)
    })
    .finally(() => {
      popupChangeAvatar.renderLoading(false);
    });
  }
})

popupChangeAvatar.setEventListeners();

//создание класса валидации
const formChangeAvatarValidator = new FormValidator(validationObject, formChangeAvatar);
//включение валидации в форме редактирования профиля
formChangeAvatarValidator.enableValidation();

//создание слушателя для кнопки редактирования аватара
avatarEditButton.addEventListener('click', () => {
  formChangeAvatarValidator.resetValidation();
  popupChangeAvatar.open();
})


//добавление новой карточки
const popupAddPlace = new PopupWithForm({
  popupSelector: addPlaceSelector,
  handleFormSubmit: (imageData) => {
    popupAddPlace.renderLoading(true);
    api.addNewCard(imageData)
    .then((imageData) => {
      cardsList.addItem(createNewCard(imageData));
      popupAddPlace.close();
    })
    .catch((err) => {
     console.log(`Ошибка: ${err.status}`)
    })
    .finally(() => {
      popupAddPlace.renderLoading(false);
    });

  }
})

popupAddPlace.setEventListeners();

//создание слушателя для кнопки добавления нового места
placeAddButton.addEventListener('click', () => {
  formAddPlaceValidator.resetValidation();
  popupAddPlace.open();
})

//создание класса валидации
const formAddPlaceValidator = new FormValidator(validationObject, formAddPlace);
//включение валидации в форме добавления места
formAddPlaceValidator.enableValidation();

//попап с картинкой
const popupWithImg = new PopupWithImage(bigImageSelector);
popupWithImg.setEventListeners();


//создание попапа подтверждения удаления карточки

const popupDeleteCard = new PopupConfirmDeletion(deleteCardPopupSelector);
popupDeleteCard.setEventListeners();


