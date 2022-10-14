import {useState} from "react"
import "./items.css";
import Card from "./card";

function Item (props)
{ 
   const [title,setTitle] = useState(props.title)
    // let title = props.title
// const clickhandler = ()=>{
//     // setTitle("updated")
    
// //    alert(title)
// }
// const statusHandler = (e)=>{
//     console.log(e.target.value)
// }

    return (
       
    <Card>
        <div className="name">
    {/* <h2 className="text">Expense Item</h2> */}
           </div>
        
           <div>
          
                <h2 className="text">{title} </h2>
                </div>
                  {/* <div className="text">{props.amount}</div> */}
                  <div className="text">{props.date}</div>
                   <div className="buttons">
                  {/* <input onChange={statusHandler} value={props.status} type="checkbox" name="" id="" />
                <button onClick={clickhandler} value={props.id}>  <i className="fas fa-times" aria-hidden="true"></i></button> */}
                </div> 
            </Card>    
                       
            )

}
export default Item