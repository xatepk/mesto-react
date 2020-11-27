import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect( () => {
    api.getInitialUsers()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    })

    api.getInitialCards()
    .then((result) => {
      setCards(result);
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return(
  <main className="content">
    <section className="profile">
      <div className="profile__view">
        <div style={{ backgroundImage: `url(${userAvatar})`,
                      backgroundSize: 'cover' }}
                      className="profile__avatar" />
        <button className="profile__edit-avatar"
                aria-label="edit"
                type="button"
                onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile}
                    className="profile__edit-button"
                    aria-label="edit"
                    type="button" />
          </div>
          <p className="profile__about-self">{userDescription}</p>
        </div>
      </div>

      <button className="profile__add-button"
              onClick={props.onAddPlace}
              aria-label="add"
              type="button" />
    </section>
    <section className="places">
      <ul className="places__list">
        {cards.map((card, i) => <Card key={i} card={card} onCardClick={props.onCardClick} />)}
      </ul>
    </section>
  </main>
  )
}

export default Main;
