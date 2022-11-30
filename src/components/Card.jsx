import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../components/Card.module.css";

const Card = ({ image, name }) => {
  return (
    <div className={classes.cardStyle}>
      <div id={classes.image}>
        <img src={image} alt="pokemon" />
      </div>
      <div className={classes.cardInfo}>
        <h2>{`${name[0].toUpperCase()}${name.slice(1)}`}</h2>
        <p>
          <NavLink to={`${name}`}>see more</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Card;
