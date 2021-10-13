import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import s from "./Views.module.css";

export default function SignUpView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.Container}>
      <h2 className={s.FormHeader}>Registration page</h2>
      <form onSubmit={handleSubmit} className={s.Form}>
        <label className={s.FormInputLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={s.FormInput}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.FormInputLabel}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={s.FormInput}
            onChange={handleChange}
            pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
            title="Email может состоять из букв, тире, цифр и не может содержать пробелы"
            required
          />
        </label>
        <label className={s.FormInputLabel}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            className={s.FormInput}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Пароль может состоять из букв, тире, цифр и не может содержать пробелы"
            required
          />
        </label>

        <button type="submit" className={s.FormButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
