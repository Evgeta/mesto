import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
//import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmDeletion from  '../components/PopupConfirmDeletion.js';

import {
  initialCards,
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
  userAvatarSelector
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
          newCard.deleteCard();
          popupDeleteCard.close()
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        }); //
      }) //
    },
    setLike: () => {
      api.setlike(newCard._data) //пересмотреть
      .then((data) => {
        newCard.setLike(data)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      }); //
    },
    removeLike: () => {
      api.removeLike(newCard._data) //пересмотреть
      .then((data) => {
        newCard.deleteLike(data)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      }); //
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


//console.log(cardsList);

//объявление идентификатора пользователя
let user_id = null;

//Запрос на получение карточек
api.getInitialCards()
.then((cardsFromServer) => {
  cardsList.renderItems(cardsFromServer);
})
.catch((err) => {
 console.log(`Ошибка в api.getInitialCards(): ${err.status}`)
})


//Запрос информации о пользователе
api.getUserInfo()
.then((userInfo) => {
  user_id = userInfo._id;
  console.log(user_id);
  console.log(userInfo);
  userOnPage.setUserInfo(userInfo);
})
.catch((err) => {
 console.log(`Ошибка в api.getUserInfo: ${err.status}`)
})



//создание попапа для редактирования профиля пользователя

const popupProfile = new PopupWithForm({
  popupSelector: profilePopupSelector,
  handleFormSubmit: (userData) => {
    api.setUserInfo(userData)
    .then((res) => {

      console.log('console.log(res);');
      console.log(res);
      userOnPage.setUserInfo(res);
      popupProfile.close();
    })
    .catch((err) => {
     console.log(`Ошибка api.setUserInfo(userData): ${err.status}`)
    })
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
  popupProfile.open();
})

//добавление новой карточки
const popupAddPlace = new PopupWithForm({
  popupSelector: addPlaceSelector,
  handleFormSubmit: (imageData) => {

    api.addNewCard(imageData)
    .then((imageData) => {
      cardsList.addItem(createNewCard(imageData));
      popupAddPlace.close();
    })
    .catch((err) => {
     console.log(`Ошибка api.addNewCard(imageData): ${err.status}`)
    })
  }
})

popupAddPlace.setEventListeners();

//создание слушателя для кнопки добавления нового места
placeAddButton.addEventListener('click', () => {
  formAddPlaceValidator.toggleButtonState();
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
console.log('вывод селектора попапа');

console.log(deleteCardPopupSelector);


const popupDeleteCard = new PopupConfirmDeletion(deleteCardPopupSelector);

popupDeleteCard.setEventListeners();


