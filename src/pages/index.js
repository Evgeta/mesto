import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';

import UserInfo from '../components/UserInfo.js';


import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector
} from '../utils/constants.js';

//созлание карточек и соответствующих им элементов

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({data:item,
      handleCardClick: ()=>{}
    }, galleryItemTemplateSelector);
    const cardElement = card.getElement();
    cardsList.addItem(cardElement);
  }
},
  gallerySelector
);

//начальная отрисовка карточек
cardsList.renderItems();


//попап с картинкой
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()

