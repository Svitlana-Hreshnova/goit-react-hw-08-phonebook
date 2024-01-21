import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./contactsOperation";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch contacts.';
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to add contact.';
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      .addDefaultCase((state) => state),
});

export default contactsSlice.reducer;
