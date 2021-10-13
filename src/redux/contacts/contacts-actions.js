import { createAction } from '@reduxjs/toolkit'

export const changeFilterAction = createAction('contactList/changeFilter')
export const fetchContactsAction = createAction('contactList/fetchContacts')
export const addContactAction = createAction('contactList/addContact')
export const deleteContactAction = createAction('contactList/deleteContact')
