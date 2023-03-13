import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Card/Cards.jsx'

import SearchBar from './components/SearchBar/SearchBar.jsx'
function App () {
  const [characters, setCharacters] = useState([])

  const onClose= (id)=>{
    setCharacters(characters.filter((char)=> char.id !== id));
  }

  const onSearch= (id)=>{
    const KEY= '7b3900ebf212.09a5fbfae83932ed306d';
    const URL_BASE= 'https://be-a-rym.up.railway.app/api';
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=> response.json())
    .then(data=>{
      if (data.name){
        setCharacters((oldChars)=> [...oldChars, data]);
      }else{
        alert('Se pudrio');
      }
    })
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className='Supreme'>
        <div>
          <img src='./Images/logo.png' alt=''></img>
        </div>
        <div className= {'Buscar'}>
          <Nav onSearch={onSearch}/>
        </div>
       <div>
         <Cards
            characters={characters}
            onClose= {onClose}
         />
       </div>
        <hr />
     </div>
  </div>
  )
}

export default App
