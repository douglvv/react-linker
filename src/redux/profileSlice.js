import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    imgUrl: "",
    username: "",
    bio: ""
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profile.imgUrl = action.payload.imgUrl;
      state.profile.username = action.payload.username;
      state.profile.bio = action.payload.bio;

      const profileData = {
        imgUrl: action.payload.imgUrl,
        username: action.payload.username,
        bio: action.payload.bio
      }

      localStorage.setItem('profile',JSON.stringify(profileData));

    },
  },
})

export const { addProfile } = profileSlice.actions

export default profileSlice.reducer