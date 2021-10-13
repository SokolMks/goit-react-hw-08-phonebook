import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchContactsAction,
  addContactAction,
  deleteContactAction,
} from "./contacts-actions";

const url = "/contacts";

export const fetchContacts = createAsyncThunk(
  fetchContactsAction,
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(url);
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(addContactAction, async (item) => {
  const contact = await axios.post(url, item);
  return contact.data;
});

export const deleteContact = createAsyncThunk(
  deleteContactAction,
  async (contactId) => {
    await axios.delete(`${url}/${contactId}`);
    return contactId;
  }
);
