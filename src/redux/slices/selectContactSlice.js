import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    status: {
      value: '0',
      label: 'No process',
    },
  },
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = contactSlice.actions;
export default contactSlice.reducer;
