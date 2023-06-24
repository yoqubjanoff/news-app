import Header from "./components/Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Mainpage from "./components/Mainpage/Mainpage"
import { useState } from "react"


function App() {
  const [lang, setLang] = useState('us')
  const [base, setBase] = useState([]);

  return (
    <>
     <Header lang={lang} setLang={setLang} base={base} setBase={setBase}/>
     <Mainpage lang={lang} setLang={setLang} base={base} setBase={setBase}/>
    </>
  )
}

export default App
