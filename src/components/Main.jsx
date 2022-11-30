import React from "react";
import { Outlet } from "react-router-dom";

import classes from "../components/Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      {/* FIXME: Outlet is placeholder to roots */}
      <Outlet />
    </main>
  );
};

export default Main;
