import { configureStore } from '@reduxjs/toolkit'
import linksSlice from './linksSlice'
import profileSlice from './profileSlice'

const store = configureStore({
  reducer: {
    links: linksSlice,
    profile: profileSlice
  },
})

export default store;