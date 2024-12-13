export default function Card({ item = {} }) {

    // destrutturo oggetto ricevuto da API con elementi che mi servono nelle card
    const { title, name, original_title, original_name, vote_average, original_language, poster_path } = item

    // ritorna quello che voglio stampato nelle card
    return (
        <div>
            <h3>{title || name}</h3>
            <h4>{original_title || original_name}</h4>
            <p>{original_language}</p>
            <p>{vote_average}</p>
        </div>
    )
}