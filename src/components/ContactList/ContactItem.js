import React from "react";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.ContactItem}>
      <p className={s.ContactItemText}>
        {name}: {number}
      </p>

      <button
        className={s.DeleteBtn}
        id={id}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
