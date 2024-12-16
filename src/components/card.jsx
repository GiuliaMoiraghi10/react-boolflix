import flagsMap from "../libs/bandiere"
import { BASE_IMG } from '../URIelements/imgURI'
import { SIZE_IMG } from '../URIelements/imgURI'
import placeholder from '../assets/bandiere/placeholder.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import style from './card.module.css'

import { useState } from 'react'


export default function Card({ item = {} }) {

    // destrutturo oggetto ricevuto da API con elementi che mi servono nelle card
    const { title, name, original_title, original_name, vote_average, original_language, poster_path } = item

    // variabile per convertire numero decimale in numero intero da 1 a 5
    const voteNumberInt = Math.ceil(vote_average / 2)

    // creo array di 5 elementi da ciclare con numero di stelle piene e vuote a seconda del punteggio
    const starsVote = new Array(5)

    for (let i = 0; i < starsVote.length; i++) {
        starsVote[i] = <FontAwesomeIcon icon={i < voteNumberInt ? faStar : faStarRegular} />
    }

    // creo variabile per l'hover
    const [hover, setHover] = useState(false)

    // ritorna quello che voglio stampato nelle card
    return (

        <section>
            <div className={style.card_img} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src={poster_path ? `${BASE_IMG}${SIZE_IMG}${poster_path}` : placeholder} alt="" />
            </div>
            {hover &&
                <div className={style.card_content}>
                    <h3 className={style.title_original}>{title || name}</h3>
                    <h4 className={style.title}>{original_title || original_name}</h4>
                    {/* <img src={`${BASE_IMG}${SIZE_IMG}${poster_path || placeholder}`} alt="" /> */}

                    {
                        flagsMap[original_language] ?
                            <img className={style.flag} src={flagsMap[original_language]} height={30} alt="" /> :
                            <p>{original_language}</p>
                    }
                    {/* <p>{voteNumberInt}</p> */}
                    <div>
                        {starsVote}
                    </div>
                </div>
            }
        </section>
    )
}