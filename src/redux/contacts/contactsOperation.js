import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setFilter } from './filterSlice';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (user, { rejectWithValue, dispatch, getState }) => {
    try {
      const name = user.name.toLowerCase();
      const currentState = getState();
      if (currentState.contacts.items.some(contact => contact.name.toLowerCase() === name)) {
        dispatch(setFilter('Contact with the same name already exists.'));
        return;
      }

      const response = await axios.post('/contacts', user);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);



export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);