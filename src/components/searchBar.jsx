import GlobalContext from "../context/GlobalContext"
import { useState, useContext, useEffects } from 'react'

export default function SearchBar() {

    // disabilito invio del form con una funzione
    function handleForm(event) {
        event.preventDefault()
        fetchMovies(query)
    }

    // creo variabile di stato dedicata alla query string per ricerca form
    const [query, setQuery] = useState('')

    // creo variabile per prendere i film dal context (come per i movies in movies.jsx)
    const { fetchMovies } = useContext(GlobalContext)

    return (

        <div className="container">
            <form onSubmit={handleForm} action="">
                <label htmlFor="search">Cerca il titolo</label>
                <input
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    id="search"
                    name="search"
                    className="form"
                    placeholder="cerca il titolo" />
                <input type="submit" />
            </form>
        </div>
    )
}