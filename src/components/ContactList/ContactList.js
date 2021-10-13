import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import ContactItem from "./ContactItem";
import s from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);

  if (filteredContacts.length === 0) return null;

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
