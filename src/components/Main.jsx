import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import ItemList from "./itemList"

// Main non riceve niente come props perchè prende elementi da GlobalContext
export default function Main() {

    // devo prendere movies e series dal GlobalContext
    const { movies, series } = useContext(GlobalContext)

    //il title che assegno ad ItemList è quello che si vedrà come titolo per separare i film dalle serie nel file ItemList
    // gli itemList riceveranno array di movies e series
    return (
        <main>
            <ItemList title='Movies' items={movies} />
            <ItemList title='Series' items={series} />
        </main>
    )
}