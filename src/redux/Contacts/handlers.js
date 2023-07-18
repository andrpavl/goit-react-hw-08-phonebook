export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

export const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};

export const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};
