import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import './styles/residentCart.css'

const ResidentsCart = ({ url }) => {
  const [resident, getApiResindet] = useFetch(url);

  useEffect(() => {
    getApiResindet();
  }, []);

  return (
    <article className="resident">
      <header className="resident__header">
        <img
          className="resident__img"
          src={resident?.image}
          alt={resident?.name}
        />
        <div className="resident__status">
          <span className= {`resident__circle ${resident?.status}`}></span>
          <span className="resident__status-value">{resident?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>

        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__items">
            <span className="resident__label">Spacie</span>
            <span className="resident__value">{resident?.species}</span>
          </li>
          <li className="resident__items">
            <span className="resident__label">Origin</span>
            <span className="resident__value">{resident?.origin.name}</span>
          </li>
          <li className="resident__items">
            <span className="resident__label">Eppisodes where appear</span>
            <span className="resident__value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentsCart;
