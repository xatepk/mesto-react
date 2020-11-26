function Card(props) {
  return (
    <li className="place" onClick={props.onCardClick}>
      <img className="place__image" alt={props.card.name} src={props.card.link} />
      <div className="place__description">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__likes">
          <button className="place__icon" aria-label="place-icon" type="button"></button>
          <span className="place__likes-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="place__delete" aria-label="place-del" type="button"></button>
    </li>
  );
}

export default Card;
