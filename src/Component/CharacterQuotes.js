import {  useSelector } from "react-redux";

const CharacterQuotes = () =>{
    const quote = useSelector((state) => state.chQuotes)
    console.log(quote)
     return(
        <div>
            <h1>character quotes</h1>
            {
                quote.map((record)=>(
                    <tr key ={record.id}>
                        <td>{record.character}</td>
                        <td>{record.dialog}</td>
                        <td>{record.movie}</td>
                    </tr>
                ))
            }
        </div>
     )
} 
export default CharacterQuotes