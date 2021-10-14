import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import s from "./Navigation.module.css";

const paths = {
  home: "/",
  register: "/register",
  login: "/login",
  contacts: "/contacts",
};


export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.NavLinksContainer}>
      <NavLink
        exact
        to={paths.home}
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to={paths.contacts}
          className={s.NavLink}
          activeClassName={s.activeNavLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}