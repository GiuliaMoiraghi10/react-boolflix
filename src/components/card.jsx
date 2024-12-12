import det from '../assets/bandiere/det.png'
import eng from '../assets/bandiere/eng.png'
import fra from '../assets/bandiere/fra.png'
import ita from '../assets/bandiere/ita.png'
import jap from '../assets/bandiere/jap.png'
import spa from '../assets/bandiere/spa.png'
import placeholder from '../assets/bandiere/placeholder.png'
import React from 'react'

export default function Card({ item = {} }) {

    // creo variabile destrutturata per passare tutte le props dell'oggetto (sia dei film che delle serie)
    const { id, title, name, original_title, original_name, original_language, vote_average } = item

    // creo variabili per distinguere film da serie
    const movieTitle = title
    const serieTitle = name
    const movieOriginalTitle = original_title
    const serieOriginalTitle = original_name

    // converto immagini
    const flagLanguage = {
        det: det,
        eng: eng,
        fra: fra,
        ita: ita,
        jap: jap,
        spa: spa,
    }

    return (
        <>
            <div>
                <figure>
                    {/* <img src={item.image_url} alt="" /> */}
                </figure>
                <div>
                    <h2>{movieTitle || serieTitle}</h2>
                    <h3>{movieOriginalTitle || serieOriginalTitle}</h3>
                    <img src={flagLanguage} alt="" />
                    <p>{original_language}</p>
                    <p>{vote_average}</p>
                </div>
            </div>
        </>
    )
}