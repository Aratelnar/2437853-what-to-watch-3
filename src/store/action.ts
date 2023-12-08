import {createAction} from '@reduxjs/toolkit';
import Film from '../types/film';
import {AuthStatus} from '../types/auth-status';
import {UserInfo} from '../types/user-info';
import Comment from '../types/comment';
import Promo from '../types/promo';

export const changeGenre = createAction<string>('changeGenre');
export const setFilms = createAction<Film[]>('setFilms');
export const setPromo = createAction<Promo>('setPromo');
export const getFilms = createAction('getFilms');
export const getGenres = createAction('getGenres');
export const setFilmsCount = createAction<number>('setFilmsCount');
export const setLoadingStatus = createAction<boolean>('setLoading');
export const setCurrentFilm = createAction<Film>('setCurrentFilm');
export const setSimilarFilms = createAction<Film[]>('setSimilarFilms');
export const setComments = createAction<Comment[]>('setComments');
export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');

export const setUser = createAction<UserInfo | null>('setUser');
