import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import classes from "../components/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <h1>PokeApi</h1>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
