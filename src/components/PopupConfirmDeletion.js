import Popup from '../components/Popup.js';
export default class PopupConfirmDeletion extends Popup {
  constructor({
    popupSelector
  }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form'); //форма
    this._buttonSubmit = this._form.querySelector('.popup__button'); //кнопка сохранения
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit',
      (evt) => {
        evt.preventDefault();
        this._handleSubmit();
  //      this._handleFormSubmit(this._getInputValues());
      }
    );
  }

  submitDelete(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
