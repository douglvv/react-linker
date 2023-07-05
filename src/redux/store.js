import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { linksReducer } from './linksSlice/linksSlice';
import { profileReducer } from './profileSlice/profileSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  links: linksReducer,
  profile: profileReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;
export const persistor = persistStore(store);
