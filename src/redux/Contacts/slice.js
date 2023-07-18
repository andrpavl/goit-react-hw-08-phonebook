import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import * as handlers from './handlers';
import { logOut } from 'redux/Auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlers.handlePending)
      .addCase(fetchContacts.fulfilled, handlers.handleFetchFulfilled)
      .addCase(fetchContacts.rejected, handlers.handleRejected)
      .addCase(addContact.pending, handlers.handlePending)
      .addCase(addContact.rejected, handlers.handleRejected)
      .addCase(addContact.fulfilled, handlers.handleAddFulfilled)
      .addCase(deleteContact.pending, handlers.handlePending)
      .addCase(deleteContact.rejected, handlers.handleRejected)
      .addCase(deleteContact.fulfilled, handlers.handleDeleteFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [];
      }),
});

export const contactsReducer = contactsSlice.reducer;
