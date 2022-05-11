(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r,o,i=this,a=t.data,u=t.handleCardClick,c=t.currentUser,l=t.handleDeleteButtonClick,s=t.setLike,f=t.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._element.remove(),i._element=null},(r="removeCard")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this.data=a,this._name=a.name,this._link=a.link,this._likes=a.likes.length,this._templateSelector=n,this._id=a._id,this._currentUser=c,this._cardOwner=a.owner._id,this._handleCardClick=u,this._handleDeleteButtonClick=l,this._setLike=s,this._removeLike=f}var t,r;return t=e,(r=[{key:"getElement",value:function(){return this._element=document.querySelector(this._templateSelector).content.querySelector(".gallery__item").cloneNode(!0),this._cardImage=this._element.querySelector(".gallery__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._placeName=this._element.querySelector(".gallery__place-name"),this._placeName.textContent=this._name,this._galleryLikeCount=this._element.querySelector(".gallery__like-count"),this._galleryLikeCount.textContent=this._likes,this._galleryHeart=this._element.querySelector(".gallery__heart"),this._likedByCurrentUser(),this._deleteButton=this._element.querySelector(".gallery__delete-icon"),this._cardOwner===this._currentUser&&this._deleteButton.classList.remove("gallery__delete-icon_hidden"),this._setEventListeners(),this._element}},{key:"_toggleLike",value:function(e){this.classList.toggle("gallery__heart_active"),this._galleryLikeCount.textContent=this._calcLikesNumber(e)}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",this._handleDeleteButtonClick),this._cardImage.addEventListener("click",this._handleCardClick),this._galleryHeart.addEventListener("click",(function(){e._galleryHeart.classList.contains("gallery__heart_active")?e._removeLike():e._setLike()}))}},{key:"setLike",value:function(e){this._galleryHeart.classList.add("gallery__heart_active"),this._galleryLikeCount.textContent=this._calcLikesNumber(e)}},{key:"_calcLikesNumber",value:function(e){return this._likes=String(e.likes.length),this._likes}},{key:"removeLike",value:function(e){this._galleryHeart.classList.remove("gallery__heart_active"),this._galleryLikeCount.textContent=this._calcLikesNumber(e)}},{key:"_likedByCurrentUser",value:function(){var e=this;this.data.likes.forEach((function(t){t._id===e._currentUser&&(e._element.querySelector(".gallery__heart").classList.add("gallery__heart_active"),e._galleryHeart=e._element.querySelector(".gallery__heart"))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handleMouseDownOnOverlayAndCrossButton",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-btn"))&&n.close()})),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleMouseDownOnOverlayAndCrossButton=this._handleMouseDownOnOverlayAndCrossButton.bind(this),this._closeButton=this._popup.querySelector(".popup__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleMouseDownOnOverlayAndCrossButton)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t,n,r,o,u=e.popupSelector,c=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(){return t._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),t._inputValues},(r="_getInputValues")in(n=h(t=i.call(this,u)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._handleFormSubmit=c,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._buttonSubmit=t._form.querySelector(".popup__button"),t._inputValues={},t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;l(_(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){l(_(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Cохранение...":"Сохранить"}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__big-image"),t._popupCaption=t._popup.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name,v(w(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),L(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),L(this,"_enableButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1})),L(this,"disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),L(this,"toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?r.disableButton():r._enableButton()})),L(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),L(this,"enableValidation",(function(){r._setEventListeners()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r,this._token=r.authorization}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResponse(e)}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function A(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t._buttonSubmit=t._form.querySelector(".popup__button"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;R(x(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"submitDelete",value:function(e){this._handleSubmit=e}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(a),V=document.querySelector(".profile"),N=V.querySelector(".profile__name-edit-btn"),F=document.querySelector(".popup__input_type_name"),H=document.querySelector(".popup__input_type_about"),M=(document.querySelector(".popup__change-profile-form"),".popup_new-place"),z=V.querySelector(".profile__add-btn"),J=(document.querySelector(M).querySelector(".popup__form"),document.querySelector(".popup__change-avatar-form"),V.querySelector(".profile__avatar-pen"));function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"bf98c7a0-6228-49bd-ba70-b0bb4b987626","Content-Type":"application/json"}}),K=new I(".profile__name",".profile__about-me",".profile__avatar"),Q=function(e){var t=new r({data:e,handleCardClick:function(){te.open(e)},currentUser:X,handleDeleteButtonClick:function(){ne.open(),ne.submitDelete((function(){G.deleteCard(e._id).then((function(){t.removeCard(),ne.close()})).catch((function(e){console.log(e)}))}))},setLike:function(){G.setLike(t.data).then((function(e){t.setLike(e)})).catch((function(e){console.log(e)}))},removeLike:function(){G.removeLike(t.data).then((function(e){t.removeLike(e)})).catch((function(e){console.log(e)}))}},"#gallery__item");return t.getElement()},W=new t({renderer:function(e){W.addItem(Q(e))}},".gallery"),X=null;Promise.all([G.getUserInfo(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,K.setUserInfo(o),W.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e.status))}));var Y=new y({popupSelector:".popup_edit-profile",handleFormSubmit:function(e){Y.renderLoading(!0),G.setUserInfo(e).then((function(e){K.setUserInfo(e),Y.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){Y.renderLoading(!1)}))}});Y.setEventListeners(),N.addEventListener("click",(function(){var e=K.getUserInfo(),t=e.name,n=e.about;F.value=t,H.value=n,oe.editProfileForm.resetValidation(),Y.open()}));var Z=new y({popupSelector:".popup_change-avatar",handleFormSubmit:function(e){Z.renderLoading(!0),G.setAvatar(e).then((function(e){K.setUserInfo(e),Z.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){Z.renderLoading(!1)}))}});Z.setEventListeners(),J.addEventListener("click",(function(){oe.changeAvatarForm.resetValidation(),Z.open()}));var ee=new y({popupSelector:M,handleFormSubmit:function(e){G.addNewCard(e).then((function(e){W.addItem(Q(e)),ee.close()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){ee.renderLoading(!1)}))}});ee.setEventListeners(),z.addEventListener("click",(function(){oe.newPlaceForm.resetValidation(),ee.open()}));var te=new S(".popup_big-image");te.setEventListeners();var ne=new D(".popup_delete-card");ne.setEventListeners();var re,oe={};re={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(re.formSelector)).forEach((function(e){var t=new O(re,e),n=e.getAttribute("name");oe[n]=t,t.enableValidation()}))})();