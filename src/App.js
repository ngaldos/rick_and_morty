import './App.css'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Cards from './components/Card/Cards.jsx'
import About from './components/About/About'
import Landing from './Views/Landing'
import Detail from './components/Detail/Detail'
import { useParams } from 'react-router-dom'
import Home from './Views/Home';

import imagen from './Images/logo.png';


function App () {
  const [characters, setCharacters] = useState([])
  const {id} = useParams();

  const onClose= (id)=>{
    setCharacters(characters.filter((char)=> char.id !== id));
  }

  const onSearch= (id)=>{
    const KEY= '7b3900ebf212.09a5fbfae83932ed306d';
    const URL_BASE= 'localhost:3000';
    fetch(`${URL_BASE}/onsearch/${id}`)
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
      <div className='Logo'>
        <img src={imagen} alt='img1'/>
      </div>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose= {onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path={`/detail/${id}`} element={<Detail id={id}/>}/>
      </Routes>
    </div>
  )
}

export default App
