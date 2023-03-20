import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: null,
  },
  reducers: {
    addTheme: (state, action) => {
      state.theme = action.payload;
    },
    resetTheme: (state) => {
      state.theme = null;
    },
  },
});
export const { addTheme, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
