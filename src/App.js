
import './App.css';
import Item   from  './components/item.js'
import NewItem from './components/newItem'
import {useState} from 'react'
function App() {

 

  const [items,setItems] = useState([])


const deleteitem=(e)=>{
  console.log(e.currentTarget.value)
  
  const index = e.currentTarget.value;
  console.log("first",items)
  // only splice array when item is found
    // items.splice(index, 1); 
    
   const arr = items.filter(item => item.id !== index)
    setItems([...arr])// 2nd parameter means remove one item only
  
 console.log(items)
  // delete items[index]
  console.log("second",items)
}

//   }
  const saveitem = (data)=>{
    const itemsData = {
      ...data,
      id:Math.random().toString(),
      status:false
    }
    items.push(itemsData)
    setItems([...items])
    console.log(itemsData)
  }
  return (
  
    <div className="App">
      <h2>Todo App</h2>
       <NewItem onsaveitem={saveitem}/>
      
   {items.map((elt,index)=>{return (
   <div key={index} className='element'><Item key={index} title= {elt.title}  date={elt.date}  id={elt.id}> </Item>
   <button  onClick={deleteitem}  value={elt.id}>  <i className="fas fa-times" aria-hidden="true"></i></button>
   </div>
   )
    })
   } 
    </div>
  );
}

export default App;
