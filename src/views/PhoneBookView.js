import React from 'react'
import ContactForm from '../components/ContactForm'
import Filter from '../components/Filter/Filter'
import ContactList from '../components/ContactList'
import s from './Views.module.css'

export default function PhoneBookView() {
  return (
    <>
      <h2 className={s.PhoneBookHeader}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.PhoneBookHeader}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  )
}
