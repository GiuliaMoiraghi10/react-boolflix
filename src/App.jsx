import './App.css'
import axios from 'axios'
import { BASE_URI } from './URIelements/baseURI'
import { KEY_API } from './URIelements/keyAPI'
import Home from './pages/Home'
import GlobalContext from './context/GlobalContext'
import { useState, useEffects } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'

function App() {

  // creo variabile di stato per i film (movies), le serie (series)
  // e la query che andrà a modificare l'oggetto in risposta alla chiamata APi in base alla compilazione del form (filtro)
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')

  // chiamata axios all'API per prendere i film
  // aggiunta della query per il form

  function fetchMovies(query) {
    axios.get(`${BASE_URI}/search/movie?${KEY_API}&query=${query}`)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      {/* passo come props le 3 variabili che mi serve prendere dal GlobalContext */}
      <GlobalContext.Provider value={{ movies, series, query }}>
        <Home />
        <Main />
      </GlobalContext.Provider>
    </>
  )
}

export default App
