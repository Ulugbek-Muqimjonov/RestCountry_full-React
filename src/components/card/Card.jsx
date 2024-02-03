import "./card.css";

function Card({ name, flag, population, capital, region }) {
  return (
    <li className="hero__item">
      <img className="hero__item-county-img" src={flag} alt={name} />
      <strong className="hero__country-name">{name}</strong>
      <div className="hero__item-innerdiv">
        <ul className="hero__item-country-info-list">
          <li className="hero__item-country-info-item">
            <strong className="hero__item-contry-info-bold">
              Population:{" "}
            </strong>
            <span className="hero__item-country-population">{population}</span>
          </li>
          <li className="hero__item-country-info-item">
            <strong className="hero__item-contry-info-bold">Region: </strong>
            <span className="hero__item-country-population">{region}</span>
          </li>
          <li className="hero__item-country-info-item">
            <strong className="hero__item-contry-info-bold">Capital: </strong>{" "}
            <span className="hero__item-country-population">{capital}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default Card;
