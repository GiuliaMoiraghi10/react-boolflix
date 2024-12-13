import './App.css'
import axios from 'axios'
import { BASE_URI } from './URIelements/baseURI'
import { KEY_API } from './URIelements/keyAPI'
import GlobalContext from './context/GlobalContext'
import { useState, useEffects } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/header'

function App() {

  // creo variabile di stato per i film (movies), le serie (series)
  // e la query che andrà a modificare l'oggetto in risposta alla chiamata APi in base alla compilazione del form (filtro)
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')

  // funzione che recupera API tramite chiamata Axios -
  // passo a get la base dell'url e come params la key e la query scritta dall'utente
  function fetchData() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: KEY_API,
        query
      }
    }).then(res => {
      console.log(res.data)
      //l'array di movie è nella chiave results, quindi passo a setMovies res.data.results, da fare uguale per le series
      setMovies(res.data.results)
      //prendere array di movies e settarlo nella variabile movies
    }).catch(error => {
      console.error(error)
      setMovies([])
    })

    // stessa chiamata axios, ma per le series
    axios.get('https://api.themoviedb.org/3/search/tv', {
      params: {
        api_key: KEY_API,
        query
      }
    }).then(res => {
      console.log(res.data)

      setSeries(res.data.results)

    }).catch(error => {
      console.error(error)
      setSeries([])
    })
  }

  return (
    <>
      {/* passo come props le 3 variabili che mi serve prendere dal GlobalContext */}
      {/* passo anche setQuery e fetchData per poter essere accessibili ovunque */}
      <GlobalContext.Provider value={{ movies, series, query, setQuery, fetchData }}>
        <Header />
        <Main />
      </GlobalContext.Provider>
    </>
  )
}

export default App
