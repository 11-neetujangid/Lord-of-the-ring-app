import { SET_Movie, SET_SELECTED, SET_CHARACTER, SET_QUOTES_BY_ID, CHARACTER_QUOTES_BY_ID } from "../Actions/action";

const initialState = {
    data: [],
    selected: '',
    character: [],
    quotes: [],
    chQuotes: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Movie:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload,
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
        default:
            return state;
    }
}
export default reducer;