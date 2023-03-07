import './App.css'
//import Card from './components/Card/Card.jsx'
import Cards from './components/Card/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'
function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className='Supreme'>
        <div>
          <img src='./Images/logo.png' alt=''></img>
        </div>
        <div className= {'Buscar'}>
         <SearchBar 
            onSearch={(characterID) => window.alert(characterID)}
          />
        </div>
       <div>
         <Cards
            characters={characters}
         />
       </div>
        <hr />
     </div>
  </div>
  )
}

export default App
