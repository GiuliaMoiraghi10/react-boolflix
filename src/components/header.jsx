import SearchBar from "./searchBar"

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <div>
                            Logo
                        </div>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}