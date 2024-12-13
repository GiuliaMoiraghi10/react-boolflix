import { useContext, useState, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import Card from './card'

export default function Movies() {

    //variabile per prendere i film dal context
    const { movies } = useContext(GlobalContext)



    return (
        <div className='container'>
            <h3>Sezione Film</h3>
            <div>
                {movies &&
                    movies.map((movie) => {
                        <Card />
                    })
                }
            </div>
        </div>
    )
}


