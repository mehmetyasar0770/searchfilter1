import { useState } from 'react';
import './App.css';
import { Users } from './users.js';
import Table from './Table.jsx';

function App() {

  const [query,setQuery] = useState("");

  const keys = ["first_name", "last_name","email"]


  const search = (data) => {
    return data.filter ((item) => 
    keys.some((key)=> item[key].toLowerCase().includes(query))
    )
  }

  
  return (
    <div className="App">
      <input type='text' className='search' placeholder='Search...' onChange={(e) => setQuery(e.target.value)}></input>
     
     
     {/*} <ul className='list'>

       {Users.filter(user => user.first_name.toLowerCase().includes(query)) .map((user)=> (
           <li key={user.id} className='listItem'> {user.first_name}</li>
        ))}

       
       
       </ul>  {*/}
      <Table data={search(Users)}/>
      
    </div>
  );
}

export default App;
