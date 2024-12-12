import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Movies() {

    //variabile per prendere i film dal context
    const { movies } = useContext(GlobalContext)

    return (
        <div className='container'>
            <h3>Sezione Film</h3>
            <ul>
                {movies &&
                    movies.map((movie) =>
                        <li key={movie.id}>
                            <div>{`Titolo: ${movie.title}`}</div>
                            <div>{`Titolo Originale: ${movie.original_title}`}</div>
                            <div>{`Lingua: ${movie.original_language}`}</div>
                            <div>{`Valutazione: ${movie.vote_average}`}</div>
                        </li>)}
            </ul>
        </div>
    )
}


