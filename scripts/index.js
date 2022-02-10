let profile = document.querySelector('.profile');
let profieNameEditButton = profile.querySelector('.profile__name-edit-btn');
let popupEditProfile = document.querySelector('.popup');
let editProfileCloseButton = popupEditProfile.querySelector('.popup__close-btn');
let editProfileForm = popupEditProfile.querySelector('.popup__form');

/*Функция открывает попап редактирования профиля*/
function openEditProfilePopup() {
  let popupEditProfile = document.querySelector('.popup');
  popupEditProfile.classList.add('popup_opened');
  fillProfilePopupValues();
}

/*Функция закрывает попап редактирования профиля*/
function closeEditProfilePopup() {
  let popupEditProfile = document.querySelector('.popup');
  popupEditProfile.classList.remove('popup_opened');
}

/*Функция наполнения полей попапа редактирования профиля текщеми значениями из html*/
function fillProfilePopupValues() {
  let profileNameValue = profile.querySelector('.profile__name');
  let profileAboutValue = profile.querySelector('.profile__about-me');
  let inputName = popupEditProfile.querySelector('.popup__input_name');
  let inputAbout = popupEditProfile.querySelector('.popup__input_about');
  inputName.value = profileNameValue.textContent;
  inputAbout.value = profileAboutValue.textContent;
}

/*Функция подтверждения данных их формы*/
function formEditProfileSubmit(evt) {
  evt.preventDefault();
  let profileNameValue = profile.querySelector('.profile__name');
  let profileAboutValue = profile.querySelector('.profile__about-me');
  let inputName = popupEditProfile.querySelector('.popup__input_name');
  let inputAbout = popupEditProfile.querySelector('.popup__input_about');
  profileNameValue.textContent = inputName.value;
  profileAboutValue.textContent = inputAbout.value;
  closeEditProfilePopup();
}

/*Слушатель на всплывание попапа*/
profieNameEditButton.addEventListener('click', openEditProfilePopup);
/*Слушатель на закрытие попапа*/
editProfileCloseButton.addEventListener('click', closeEditProfilePopup);
/*Слушатель на подтверждение формы*/
editProfileForm.addEventListener('submit', formEditProfileSubmit);
