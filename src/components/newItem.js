import "./newItem.css";
import {useState} from "react"
const NewItem = (props)=>{

 const [newTitle,SetTitle] = useState("")
const [newDate,setDate] = useState("")
// let [userInput,setUserInput] = useState(
// {
// enteredTitle:"",
// enteredDate:""
// }
// )
const titleChange = (event)=>{
      SetTitle(event.target.value)
    // setUserInput = ((prev)=>{
    //  return  {...prev,enteredTitle:event.target.value}
    // })
    // console.log("Worked",setUserInput())
}
const dateChange = (event)=>{
    setDate(event.target.value)
}


const submitHandler = (event)=>{
    event.preventDefault()
    const itemsData = {
        title:newTitle,
        date:newDate,
    }

    props.onsaveitem(itemsData)
        //   const itemsData =userInput
    // console.log(itemsData)
}

    return  <div className="container">
        <form onSubmit={submitHandler}>
            <div className="inputControl">
            
                <label className="title">title</label>
             <input value={newTitle} onChange={titleChange} className="formtext" type="text"  />
          
            <label className="title">Date</label>
                <input value={newDate} onChange={dateChange} className="date" type="date"/>
                <input className="submit" type="submit"/>
                
            </div>
        </form>
    </div>
}
export default NewItem