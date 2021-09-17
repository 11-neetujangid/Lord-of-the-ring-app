import {  useSelector } from "react-redux";

const Quotes = () =>{
   const quote = useSelector((state) => state.quotes)
   console.log(quote)
    return(
       <div>
           <h1>Quotes</h1>
           {
               quote.map((record)=>(
                   <tr>
                       <td>{record.character}</td>
                       <td>{record.dialog}</td>
                       <td>{record.movie}</td>
                   </tr>
               ))
           }
       </div>
    )
}
export default Quotes;