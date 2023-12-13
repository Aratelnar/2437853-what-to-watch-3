import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Slices} from '../../types/slices';
import {FavoriteState} from '../../types/state';
import {changeFavorite, fetchFavorite} from '../api-action';

const initialState: FavoriteState = {
  favoriteCount: 0,
  favoriteFilms: [],
  dataLoading: false,
  error: null
};

export const fovoriteSlice = createSlice({
  name: Slices.Favorite,
  initialState,
  reducers: {
    setFavoriteCount: (state, action:PayloadAction<number>) => {
      state.favoriteCount = action.payload;
    },
    addFavoriteCount: (state, action:PayloadAction<number>) => {
      state.favoriteCount += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = state.favoriteFilms.length;
        state.dataLoading = false;
        state.error = null;
      })
      .addCase(fetchFavorite.rejected, (state, action) => {
        state.error = action.error;
        state.dataLoading = false;
        state.favoriteFilms = [];
        state.favoriteCount = 0;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        state.favoriteCount += action.payload.isFavorite ? 1 : -1;
      });
  }
});

export const {setFavoriteCount, addFavoriteCount} = fovoriteSlice.actions;
