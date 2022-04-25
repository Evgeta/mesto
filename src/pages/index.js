import './index.css';

import Section from '../components/Section.js';
import Card from '../components/Card.js';

import {
  initialCards,
  galleryItemTemplateSelector,
  gallerySelector
} from '../utils/constants.js';

// const testitem={
//   name: "Челябинская область",
//   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
// };

//const card = new Card( {testitem, handleCardClick: ()=>{}}, galleryItemTemplateSelector);


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

cardsList.renderItems();


