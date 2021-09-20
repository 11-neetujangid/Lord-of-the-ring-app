import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, getChararcter, getMovieQuotesById, getCharacterQuotesById } from "../Services/api"
import { setSelected } from "../Actions/action";
import { useHistory } from "react-router";
import Searching from "./Searching";

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        dispatch(getMovie(currentPage));
    }, []);
    useEffect(() => {
        dispatch(getChararcter(currentPage));
    }, []);

    const movieData = useSelector((state) => state.movieData);
    console.log("movie", movieData);
    const character = useSelector((state) => state.character);
    // console.log(character);
    const selected = useSelector((state) => state.selected);
    // console.log(selected);

    const pages = [];
    for (let i = 1; i <= Math.ceil(movieData.length / itemsPerPage); i++) {
        pages.push(i);
        console.log(pages)
    }
    // console.log(pages)
    const pagesforCharacter = []
    for (let i = 1; i <= Math.ceil(character.length / itemsPerPage); i++) {
        pagesforCharacter.push(i);
    }
    const renderPageNumber = pages.map((number) => {
        return (
            <li key={number} id={number}>
                <a onClick={() => onClickPage(number)} >{number}</a>
            </li>
        )
    })
    const renderPageNumberCharacter = pagesforCharacter.map((number) => {
        return (
            <li key={number} id={number}>
                <a onClick={() => onClickPageCharacter(number)} >{number}</a>
            </li>
        )
    })
    const onClickPage = (page) => {
        setCurrentPage(page);
    }
    const onClickPageCharacter = (page) => {
        setCurrentPage(page);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = movieData.slice(indexOfFirstItem, indexOfLastItem)
    const currentItemOfCharacter = character.slice(indexOfFirstItem, indexOfLastItem)

    const onSelectMovie = (e) => {
        console.log("select", e.target.value);
        dispatch(setSelected(e.target.value, e.target.number));
    }
    const onClickMovieQuotes = (Id) => {
        dispatch(getMovieQuotesById(Id))
        history.push(`/movie/${Id}/quote`)
    }
    const onClickCharacterQuotes = (Id) => {
        dispatch(getCharacterQuotesById(Id))
        history.push(`/character/${Id}/quote`)
    }
    const handlePreviousBtn = () => {
        pages.map((number) => {
            setCurrentPage(number - 1);
        })
    }
    const handlePreviousBtn2 = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleNextBtn = () => {
        pages.map((number) => {
            setCurrentPage(number);
        })
    }
    const handleNextBtnForCharacter = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div>
            <h1>Home Page </h1>
            <div className="search">
                <select className="form-select" onChange={(e) => onSelectMovie(e)}>
                    <option select="true"> Select One </option>
                    <option value="movies" number="5">View Movies</option>
                    <option value="characters">View Characters</option>
                </select>
            </div>
            <div><br />
                <Searching /> <br /><br />
                <table className="table">
                    <tbody>
                        {
                            selected === "movies" ?
                                currentItem.map((record) => (
                                    <tr key={record._id}>
                                        <td>{record.name}</td>
                                        <td>{record.runtimeInMinutes}</td>
                                        <td>{record.academyAwardWins}</td>
                                        <td>{record.budgetInMillions}</td>
                                        <td>{record.academyAwardNominations}</td>
                                        <td>{record.rottenTomatoesScore}</td>
                                        <td><button className="btn btn-outline-primary" onClick={() => onClickMovieQuotes(record._id)}>all quotes</button></td>
                                    </tr>

                                )) : ""
                        }
                        {selected === "characters" ?
                            currentItemOfCharacter.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.name}</td>
                                    <td>{record.height}</td>
                                    <td>{record.race}</td>
                                    <td>{record.hair}</td>
                                    <td>{record.gender}</td>
                                    <td>{record.birth}</td>
                                    <td>{record.aspouse}</td>
                                    <td>{record.wikiUrl}</td>
                                    <td><button className="btn btn-outline-primary" onClick={() => onClickCharacterQuotes(record._id)}>all quotes</button></td>
                                </tr>
                            )) : ""
                        }
                    </tbody>
                </table>
            </div>
            <div className="center">
                <ul className="pagination">
                    <button className="btn btn-outline-primary" onClick={handlePreviousBtn} >Previous</button>
                    {renderPageNumber}
                    <button className="btn btn-outline-primary" onClick={handleNextBtn}>Next</button>
                </ul>
            </div>
            <ul className="pagination">
                <button className="btn btn-outline-primary" onClick={handlePreviousBtn2} >Previous</button>
                {renderPageNumberCharacter}
                <button className="btn btn-outline-primary" onClick={handleNextBtnForCharacter}>Next</button>
            </ul>
            <button className="btn btn-outline-primary" onClick={handleNextBtnForCharacter}>Next</button>

        </div>
    )
}
export default HomePage;