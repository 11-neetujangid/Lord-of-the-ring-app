import { SET_MOVIE, SET_SELECTED, SET_CHARACTER, SET_QUOTES_BY_ID, CHARACTER_QUOTES_BY_ID, FILTERS, SET_FILTER_DATA, SET_FILTER_CHARACTER } from "../Actions/action";

const initialState = {
    movieData: [],
    selected: '',
    character: [],
    quotes: [],
    chQuotes: [],
    filetr: '',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            console.log(action.payload);
            return {
                ...state,
                movieData: action.payload.docs,
            }
        case SET_SELECTED:
            console.log(action.payload);
            return {
                ...state,
                selected: action.payload,
            }
        case SET_CHARACTER:
            console.log(action.payload);
            return {
                ...state,
                character: action.payload,
            }
        case SET_QUOTES_BY_ID:
            console.log(action.payload);
            return {
                ...state,
                quotes: action.payload,
            }
        case CHARACTER_QUOTES_BY_ID:
            console.log(action.payload);
            return {
                ...state,
                chQuotes: action.payload,
            }
        case FILTERS:
            console.log(action.payload);
            return {
                ...state,
                filter: action.payload,

            }
        case SET_FILTER_DATA:
            console.log(action.payload);
            return {
                ...state,
                movieData: action.payload.docs,
            }
        case SET_FILTER_CHARACTER:
            console.log(action.payload);
            return {
                ...state,
                character: action.payload.docs,
            }
        default:
            return state;
    }
}
export default reducer;