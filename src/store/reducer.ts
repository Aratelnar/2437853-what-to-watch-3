import {combineReducers} from '@reduxjs/toolkit';

import {Slices} from '../types/slices';
import {userSlice} from './user/user-store.slice';
import {filmSlice} from './film/film-store.slice';
import {generalSlice} from './general/general-store.slice';

export const reducer = combineReducers({
  [Slices.User]: userSlice.reducer,
  [Slices.Film]: filmSlice.reducer,
  [Slices.General]: generalSlice.reducer,
});
