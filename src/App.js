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


function App () {
  const [characters, setCharacters] = useState([])
  const {id} = useParams();
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
        <img src='./Images/imagen1' alt='img1'/>
      </div>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose= {onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path={`/detail/${id}`} element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
