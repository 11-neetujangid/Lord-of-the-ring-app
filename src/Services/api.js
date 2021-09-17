
import axios from "axios";
import { setMovie, setCharacter, setQuotesById, setCharacterQuotesById} from "../Actions/action";

const request = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
    headers: { 
        'Authorization': 'Bearer 8lviiBbGRq6E_Em7kLMe'
    }
});
export const getMovie = () => async (dispatch, getState) => {
    try {
        const response = await request.get(`/movie`, {
            headers: request.headers
        })
        console.log(response.data.docs)
        dispatch(setMovie(response.data.docs));
    } catch (err) {
        console.log(err)
    }
};
export const getChararcter = () => async (dispatch, getState) => {
    try {
        const response = await request.get(`/character`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setCharacter(response.data.docs));
    } catch (err) {
        console.log(err)
    }
}
export const getMovieQuotesById = (id) => async (dispatch, getState)=>{
    console.log(id)
    try {
        const response = await request.get(`/movie/${id}/quote`, {
            headers: request.headers
        })
        console.log(response)
        dispatch(setQuotesById(response.data.docs));
    } catch (err) {
        console.log(err)
    }
}
export const getCharacterQuotesById = (id) => async (dispatch, getState)=>{
    console.log(id)
    try {
        const response = await request.get(`/character/${id}/quote`, {
            headers: request.headers
        })
        console.log(response.data.docs)
        dispatch(setCharacterQuotesById(response.data.docs));
    } catch (err) {
        console.log(err)
    }
}

