import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, getChararcter, getMovieQuotesById, getCharacterQuotesById } from "../Services/api"
import { setSelected } from "../Actions/action";
import { useHistory } from "react-router";

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getMovie());
    }, []);
    useEffect(() => {
        dispatch(getChararcter());
    }, []);
    const data = useSelector((state) => state.data);
    console.log(data);
    const character = useSelector((state) => state.character);
    console.log(character);
    const selected = useSelector((state) => state.selected);
    console.log(selected);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const pages = [];
    console.log(Math.ceil(data.length / itemsPerPage))
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }
    const pagesforCharacter = []
    for (let i = 1; i <= Math.ceil(character.length / itemsPerPage); i++) {
        pagesforCharacter.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem)
    const currentItemOfCharacter = character.slice(indexOfFirstItem, indexOfLastItem)

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
    const onClickPageCharacter = (pageNumber) => {
        console.log((pageNumber));
        setCurrentPage((pageNumber))
    }
    const onClickPage = (pageNumber) => {
        console.log((pageNumber));
        setCurrentPage((pageNumber))
    }

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

    return (
        <div>
            <h1>Home Page </h1>
            <select className="form-select" onChange={(e) => onSelectMovie(e)}>
                <option select="true"> Select One </option>
                <option value="movies" number="5">View Movies</option>
                <option value="characters">View Characters</option>
            </select>
            <div><br /><br />
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
                <ul className="pagination">{renderPageNumber} </ul>
            </div>
            <li className="pagination">{renderPageNumberCharacter} </li>
        </div>
    )
}
export default HomePage;