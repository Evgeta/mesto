const profile = document.querySelector(".profile");
const profieNameEditButton = profile.querySelector(".profile__name-edit-btn");
const popupEditProfile = document.querySelector(".popup");
const editProfileCloseButton =
  popupEditProfile.querySelector(".popup__close-btn");
  const editProfileForm = popupEditProfile.querySelector(".popup__form");

/*Функция открывает попап редактирования профиля*/
function openEditProfilePopup() {
  const popupEditProfile = document.querySelector(".popup");
  popupEditProfile.classList.add("popup_opened");
  fillProfilePopupValues();
}

/*Функция закрывает попап редактирования профиля*/
function closeEditProfilePopup() {
  const popupEditProfile = document.querySelector(".popup");
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

/*Функция подтверждения данных их формы*/
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

const initialCards = [
  {
    name: "Озеро Кижи",
    link: "./images/kizhi.jpg",
  },
  {
    name: "Соловки",
    link: "./images/solovki.jpg",
  },
  {
    name: "Кучерлинские озёра, Алтай",
    link: "./images/kucherlinskie.jpg",
  },
  {
    name: "Морской порт, Владивосток",
    link: "./images/sea_port_vladivostok.jpg",
  },
  {
    name: "Спасо-Яковлевский монастырь в Ростове Великом",
    link: "./images/spaso-yarsl.jpg",
  },
  {
    name: "Кремль, Казань",
    link: "./images/kazan kreml.jpg",
  },
  {
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
  },
];


const gallery = document.querySelector('.gallery');

const galleryItemTemplate = document.querySelector('#gallery__item').content;

// клонируем содержимое тега template
const galleryItem = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);

// наполняем содержимым
galleryItem.querySelector('.gallery__image').src = './images/kizhi.jpg';
galleryItem.querySelector('.gallery__image').alt = 'Озеро Кижи';
galleryItem.querySelector('.gallery__place-name').textContent = 'Озеро Кижи';

// отображаем на странице
//gallery.append(galleryItem);


//initialCards.forEach()


/*Функция открывает попап редактирования профиля*/
function showDeleteIcon() {
  const cardDeleteIcon = document.querySelector(".gallery__delete-icon");
  cardDeleteIcon.classList.toggle("gallery__delete-icon_hidden");
}

/*Иконки удаления*/
const cardDeleteIcon = document.querySelector(".gallery__delete-icon");

/*Слушатель на движение курсора над иконкой удаления */
cardDeleteIcon.addEventListener("hover", showDeleteIcon);



/*Слушатель на нажатие кнопки удаления карточки*/
//profieNameEditButton.addEventListener("click", openEditProfilePopup);


