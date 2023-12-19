import {store} from '../store';
import Film from './film';
import Comment from './comment';
import {SerializedError} from '@reduxjs/toolkit';
import Promo from './promo';
import {AuthStatus} from './auth-status';
import {UserInfo} from './user-info';

export type FilmStore = {
  film: Film | null;
  similarFilms: Film[];
  comments: Comment[];
  dataLoading: boolean;
  error: SerializedError | null;
};

export type GeneralState = {
  films: Film[];
  promo: Promo | null;
  genre: string;
  dataLoading: boolean;
  error: SerializedError | null;
};

export type UserState = {
  authorizationStatus: AuthStatus;

  user: UserInfo | null;
  error: SerializedError | null;
};

export type FavoriteState = {
  favoriteCount: number;
  favoriteFilms: Film[];
  dataLoading: boolean;
  error: SerializedError | null;
};

export type State = ReturnType<typeof store.getState>;
