import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Components/CounterSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  counter: counterReducer,
});
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;