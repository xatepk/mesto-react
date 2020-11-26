import React, { useState } from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({isOpen: false, img:{}});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (e) => {
    console.log(e);
    setSelectedCard({...setSelectedCard, isOpen:true, img: e.target} );
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({isOpen: false, img:{}});
  }

  return (
  <>
  <div className="page">
  <Header />
  <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
  <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
    <input type="text" name="name" className="popup__item popup__item_el_name popup__input" placeholder="Ваше Имя" id="name-input" required minLength="2" maxLength="40" autoComplete="off" />
    <span className='popup__input-error' id='name-input-error'></span>
    <input type="text" name="about-self" className="popup__item popup__item_el_about-self popup__input" placeholder="О себе" id="about-self-input" required minLength="2" maxLength="200" autoComplete="off" />
    <span className='popup__input-error' id='about-self-input-error'></span>
    <input type="submit" value= "Сохранить" className="popup__button" />
  </PopupWithForm>
  <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
    <input type="text" name="place" className="popup__item popup__item_el_name popup__input" placeholder="Название" id="place-input" required minLength="2" maxLength="30" autoComplete="off" />
    <span className='popup__input-error' id='place-input-error'></span>
    <input type="url" name="place-url" className="popup__item popup__item_el_url popup__input" placeholder="Ссылка на картинку" id="place-url-input" required autoComplete="off" />
    <span className='popup__input-error' id='place-url-input-error'></span>
    <input type="submit" value= "Создать" className="popup__button" />
  </PopupWithForm>
  <PopupWithForm name="del" title="Вы уверены?">
    <input type="submit" value= "Да" className="popup__confirmation-button" />
  </PopupWithForm>
  <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
    <input type="url" name="avatar-url" className="popup__item popup__item_el_url popup__input" placeholder="Ссылка на картинку" id="avatar-url-input" required autoComplete="off" />
    <span className='popup__input-error' id='avatar-url-input-error'></span>
    <input type="submit" value= "Сохранить" className="popup__button" />
  </PopupWithForm>
  <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  <Footer />
  </div>
</>
  );
}

export default App;
