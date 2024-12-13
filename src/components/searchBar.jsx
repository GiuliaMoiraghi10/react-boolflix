import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

export default function SearchBar() {


    // deve prendere query da GlobalContext da poter dare al value dell'inpunt
    // prende anche funzione fetchData che fa la chiamata axios in App.jsx
    const { query, setQuery, fetchData } = useContext(GlobalContext)

    // setQuery da invocare all'evento onChange dell'input
    function onChange(e) {
        setQuery(e.target.value)
    }

    // disabilito invio del form (input), legato all'evento onSubmit
    function onSubmit(e) {
        e.preventDefault()
        // invoco funzione fetchData (in App.jsx) per collegarla all'input
        fetchData()
    }

    return (

        <form onSubmit={onSubmit}>
            <label htmlFor="query">Cerca il titolo</label>
            <input
                onChange={onChange}
                value={query}
                type="text"
                id="query"
                name="query"
                className="form"
                placeholder="cerca il titolo" />
            <button>Cerca</button>
        </form>
    )
}