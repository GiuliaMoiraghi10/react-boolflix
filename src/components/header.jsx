import SearchBar from "./searchBar"
import style from './header.module.css'
import logo from '../assets/logo/logo.png'

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.navbar}>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}