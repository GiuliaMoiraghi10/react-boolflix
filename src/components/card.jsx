import flagsMap from "../libs/bandiere"

export default function Card({ item = {} }) {

    // destrutturo oggetto ricevuto da API con elementi che mi servono nelle card
    const { title, name, original_title, original_name, vote_average, original_language, poster_path } = item

    // ritorna quello che voglio stampato nelle card
    return (
        <div className="col_4">
            <div className="card">
                <h3>{title || name}</h3>
                <h4>{original_title || original_name}</h4>

                {
                    flagsMap[original_language] ?
                        <img src={flagsMap[original_language]} height={20} alt="" /> :
                        <p>{original_language}</p>
                }
                <p>{vote_average}</p>
            </div>
        </div>
    )
}