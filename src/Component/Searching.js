import { useDispatch, useSelector } from 'react-redux';
import { filters } from '../Actions/action';
import { sortMovieData, sortCharacterData, byNameInclude, byNameExclude, byName, byMovieName,sortByAward, sortByRuntime } from '../Services/api';

const Searching = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter)
    const selected = useSelector((state) => state.selected)
    
    const onValueChange = (e) => {
        dispatch(filters(e.target.value));
    }
    const handleSorting = () => {
        dispatch(sortMovieData(filter));
    }
    const handleByMovieName = () => {
        dispatch(byMovieName(filter));
    }
    const handleBudget = () => {
        dispatch(sortByRuntime(filter));
    }
    const handleAward = () => {
        dispatch(sortByAward(filter));
    }
    const handleSortingChar = () => {
        dispatch(sortCharacterData(filter));
    }
    const onClickNameInclude = () => {
        dispatch(byNameInclude(filter));
    }
    const onClickNameExclude = () => {
        dispatch(byNameExclude(filter));
    }
    const handleByName = () => {
        dispatch(byName(filter));
    }
    return (
        <div>
            <div className="search">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" name="search" onChange={(e) => onValueChange(e)} />
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleSorting()} >Sort Movie</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleByMovieName()} >Movie Name</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleBudget()} >runtimeInMinutes</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleAward()} >AwardWin</button>
                </div><br />
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" name="search" onChange={(e) => onValueChange(e)} />
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleByName()} >Name</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => handleSortingChar()} >Sort Characters</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickNameInclude()} >Name Include</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickNameExclude()} >Name Exclude</button>
                </div>
            </div>
        </div>
    )
}
export default Searching;