import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null
  },
  reducers: {
    authUserByAccessToken: (state, action) => {
      state.accessToken = action.payload
    }
  }
})
export const { authUserByAccessToken } = authSlice.actions
export default authSlice.reducer