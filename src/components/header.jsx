import SearchBar from "./searchBar"

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <h1>Titolo progetto + logo</h1>
                    <SearchBar />
                </div>
            </header>
        </>
    )
}