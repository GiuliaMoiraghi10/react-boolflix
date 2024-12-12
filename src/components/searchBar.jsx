export default function SearchBar() {
    return (

        <div className="container">
            <form action="">
                <label htmlFor="search">Cerca il titolo che vuoi</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    className="form"
                    placeholder="cerca il titolo" />
                <button>Cerca</button>
            </form>
        </div>
    )
}