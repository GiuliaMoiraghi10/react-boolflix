import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

export default function SearchBar() {


    // deve prendere query da GlobalContext da poter dare al value dell'inpunt
    const { query, setQuery } = useContext(GlobalContext)

    // setQuery da invocare all'evento onChange dell'input
    function onChange(e) {
        setQuery(e.target.value)
    }

    // disabilito invio del form (input), legato all'evento onSubmit
    function onSubmit(e) {
        e.preventDefault()
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