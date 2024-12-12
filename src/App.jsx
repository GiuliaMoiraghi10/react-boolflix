import './App.css'
import axios from 'axios'
import { BASE_URI } from './URIelements/baseURI'
import { KEY_API } from './URIelements/keyAPI'
import Home from './pages/Home'
import GlobalContext from './context/GlobalContext'
import { useState, useEffects } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // creo variabile di stato per i film (movies)
  const [movies, setMovies] = useState()

  // chiamata axios all'API per prendere i film
  // aggiunta della query per il form

  function fetchMovies(query) {
    axios.get(`${BASE_URI}/search/movie?${KEY_API}&query=${query}`)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(error => {
        console.error('Film non trovato')
      })
  }

  return (
    <>
      <GlobalContext.Provider value={{}}>
        <Home />
      </GlobalContext.Provider>
    </>
  )
}

export default App
