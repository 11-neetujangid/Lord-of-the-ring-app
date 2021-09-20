export const SET_MOVIE = 'SET_MOVIE';
export const SET_SELECTED = 'SET_SELECTED';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_QUOTES_BY_ID = 'SET_QUOTES_BY_ID';
export const CHARACTER_QUOTES_BY_ID = 'CHARACTER_QUOTES_BY_ID';
export const FILTERS = "FILTERS";
export const SET_FILTER_DATA = "SET_FILTER_DATA";
export const SET_FILTER_CHARACTER = "SET_FILTER_CHARACTER";

export const setMovie = (payload) => ({ type: SET_MOVIE, payload: payload })
export const setSelected = (payload) => ({ type: SET_SELECTED, payload: payload });
export const setCharacter = (payload) => ({ type: SET_CHARACTER, payload: payload });
export const setQuotesById = (payload) => ({ type: SET_QUOTES_BY_ID, payload: payload });
export const setCharacterQuotesById = (payload) => ({ type: CHARACTER_QUOTES_BY_ID, payload: payload });
export const filters = (payload) => ({ type: FILTERS, payload: payload });
export const setFilterData = (payload) => ({ type: SET_FILTER_DATA, payload: payload });
export const setFilterCharacter= (payload) => ({ type: SET_FILTER_CHARACTER, payload: payload });
