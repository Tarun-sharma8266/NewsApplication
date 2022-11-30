import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import '../Assets/Css/Style.css'
import Home from './Home'
export default function App() {
     
    var [language, setlanguage] = useState("hi")
    var [pageSize, setpageSize] = useState(8)
    var [search, setlsearch] = useState("")

    const changeLanguage = (data) => {
        setlanguage(data)
    }
    const changeSize = (data) => {
        setpageSize(data)
    }
    const changeSearch = (data) => {
       setlsearch(data)
    }
        return (
            <>
                <BrowserRouter>
                    <Navbar changeLanguage={changeLanguage} changeSize={changeSize} changeSearch={changeSearch} />
                    <Routes>
                        <Route path='/' element={<Home language={language} search={search} pageSize={pageSize} q="All" />} />
                        <Route path='/Politics' element={<Home language={language} search={search} pageSize={pageSize} q="Politics" />} />
                        <Route path='/Science' element={<Home language={language} search={search} pageSize={pageSize} q="Science" />} />
                        <Route path='/Technology' element={<Home language={language} search={search} pageSize={pageSize} q="Technology" />} />
                        <Route path='/Sports' element={<Home language={language} search={search} pageSize={pageSize} q="Sports" />} />
                        <Route path='/Covid-19' element={<Home language={language} search={search} pageSize={pageSize} q="Covid-19" />} />
                        <Route path='/Entertainment' element={<Home language={language} search={search} pageSize={pageSize} q="Entertainment" />} />
                        <Route path='/Education' element={<Home language={language} search={search} pageSize={pageSize} q="Education" />} />
                        <Route path='/ICC-WCT20' element={<Home language={language} search={search} pageSize={pageSize} q="ICC WCT20" />} />
                        <Route path='/Cricket' element={<Home language={language} search={search} pageSize={pageSize} q="Cricket" />} />
                        <Route path='/World' element={<Home language={language} search={search} pageSize={pageSize} q="World" />} />
                        <Route path='/Jokes' element={<Home language={language} search={search} pageSize={pageSize} q="Jokes" />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
        )
    }

