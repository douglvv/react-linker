import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    imgUrl: null,
    username: null,
    bio: null
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profile = action.payload.profile

      localStorage.setItem('profile',JSON.stringify(action.payload.profile));
    },
  },
})

export const { addProfile } = profileSlice.actions

export const profileReducer = profileSlice.reducer