import './App.css'
import axios from 'axios'
import { BASE_URI } from './URIelements/baseURI'
import { KEY_API } from './URIelements/keyAPI'
import Home from './pages/Home'
import GlobalContext from './context/GlobalContext'

function App() {

  return (
    <>
      <GlobalContext.Provider value={{}}>
        <Home />
      </GlobalContext.Provider>
    </>
  )
}

export default App
