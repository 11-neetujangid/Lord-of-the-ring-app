export const SET_Movie = 'SET_Movie';
export const SET_SELECTED = 'SET_SELECTED';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_QUOTES_BY_ID = 'SET_QUOTES_BY_ID';
export const CHARACTER_QUOTES_BY_ID = 'CHARACTER_QUOTES_BY_ID';

export const setMovie = (payload) => ({ type: SET_Movie, payload: payload });
export const setSelected = (payload) => ({ type: SET_SELECTED, payload: payload });
export const setCharacter = (payload) => ({ type: SET_CHARACTER, payload: payload });
export const setQuotesById = (payload) => ({ type: SET_QUOTES_BY_ID, payload: payload });
export const setCharacterQuotesById = (payload) => ({ type: CHARACTER_QUOTES_BY_ID, payload: payload });
