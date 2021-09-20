
import axios from "axios";
import {
    setMovie, setCharacter, setQuotesById, setCharacterQuotesById, setFilterData, setFilterCharacter
} from "../Actions/action";

const request = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
    headers: {
        'Authorization': 'Bearer 8lviiBbGRq6E_Em7kLMe'
    }
});
export const getMovie = (page) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/movie?page=${page}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setMovie(response.data));
    } catch (err) {
        console.log(err)
    }
};
export const getChararcter = (page) => async (dispatch, getState) => {
    try {
        const response = await request.get(`/character?page=${page}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setCharacter(response.data.docs));
    } catch (err) {
        console.log(err)
    }
}
export const getMovieQuotesById = (id) => async (dispatch, getState) => {
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
export const getCharacterQuotesById = (id) => async (dispatch, getState) => {
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
export const sortMovieData = (sort) => async (dispatch) => {
    console.log(sort)
    try {
        const response = await request.get(`/movie?sort=name:${sort}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setFilterData(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const byMovieName = (name) => async (dispatch) => {
    console.log(name)
    try {
        const response = await request.get(`/movie?name=${name}`, {
            headers: request.headers
        })
        console.log("name", response.data.docs)
        dispatch(setFilterData(response.data));
    } catch (err) {
        console.log(err);
    }

}
export const sortByRuntime = (sort) => async (dispatch) => {
    console.log(sort)
    try {
        const response = await request.get(`/movie?runtimeInMinutes>${sort}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setFilterData(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const sortByAward = (sort) => async (dispatch) => {
    console.log(sort)
    try {
        const response = await request.get(`/movie?academyAwardWins>${sort}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setFilterData(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const sortCharacterData = (sort) => async (dispatch) => {
    console.log(sort)
    try {
        const response = await request.get(`/character?sort=name:${sort}`, {
            headers: request.headers
        })
        console.log(response.data)
        dispatch(setFilterCharacter(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const byNameInclude = (name) => async (dispatch) => {
    console.log(name)
    try {
        const response = await request.get(`/character?race=${name}`, {
            headers: request.headers
        })
        console.log("name", response.data.docs)
        dispatch(setFilterCharacter(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const byNameExclude = (name) => async (dispatch) => {
    console.log(name)
    try {
        const response = await request.get(`/character?race!=${name}`, {
            headers: request.headers
        })
        console.log("name", response.data.docs)
        dispatch(setFilterCharacter(response.data));
    } catch (err) {
        console.log(err);
    }
}
export const byName = (name) => async (dispatch) => {
    console.log(name)
    try {
        const response = await request.get(`/character?name=${name}`, {
            headers: request.headers
        })
        console.log("name", response.data.docs)
        dispatch(setFilterCharacter(response.data));
    } catch (err) {
        console.log(err);
    }
}