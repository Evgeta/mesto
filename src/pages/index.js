import './index.css';

import '../components/Section.js';
import '../components/Card.js';

import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector
} from '../utils/constants.js';


const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({item,
      handleCardClick: ()=>{}
    }, galleryItemTemplateSelector);
    const cardElement = card.getElement();
    cardsList.setItem(cardElement);
  }
},
  gallerySelector
);

cardsList.renderItems();


