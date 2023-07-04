import { configureStore } from '@reduxjs/toolkit';
import { linksReducer } from './linksSlice/linksSlice';
import { profileReducer } from './profileSlice/profileSlice';

const store = configureStore({
  reducer: {
    links: linksReducer,
    profile: profileReducer,
  },
});

export default store;
