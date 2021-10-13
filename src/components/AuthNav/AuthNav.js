import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const paths = {
  home: "/",
  register: "/register",
  login: "/login",
  contacts: "/contacts",
};


export default function AuthNav() {
  return (
    <div className={s.AuthNavContainer}>
      <NavLink
        to={paths.register}
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to={paths.login}
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
