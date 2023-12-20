import { useState } from 'react';
import './App.css';
import { Users } from './users.js';

function App() {

  const [query,setQuery] = useState("");

  
  return (
    <div className="App">
      <input type='text' className='search' placeholder='Search...' onChange={(e) => setQuery(e.target.value)}></input>
      <ul className='list'>

        {Users.filter(user => user.first_name.toLowerCase().includes(query)) .map((user)=> (
           <li key={user.id} className='listItem'> {user.first_name}</li>
        ))}

       
       
      </ul>

      
    </div>
  );
}

export default App;
