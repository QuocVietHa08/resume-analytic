import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';
import contactSlice from './slices/selectContactSlice';

export default combineReducers({
  theme: themeSlice,
  auth: authSlice,
  contactSelect: contactSlice,
});
