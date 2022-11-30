import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import '../Assets/Css/Style.css'
import Home from './Home'
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            pageSize: 8,
            search:""
        }
    }
    changeLanguage = (data) => {
        this.setState({ language: data })
    }
    changeSize = (data) => {
        this.setState({ pageSize: data })
    }
    changeSearch = (data) => {
        this.setState({search: data })
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeLanguage={this.changeLanguage} changeSize={this.changeSize} changeSearch={this.changeSearch}/>
                    <Routes>
                        <Route path='/' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="All" />} />
                        <Route path='/Politics' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Politics" />} />
                        <Route path='/Science' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Science" />} />
                        <Route path='/Technology' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Technology" />} />
                        <Route path='/Sports' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Sports" />} />
                        <Route path='/Covid-19' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Covid-19" />} />
                        <Route path='/Entertainment' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Entertainment" />} />
                        <Route path='/Education' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Education" />} />
                        <Route path='/ICC-WCT20' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="ICC WCT20" />} />
                        <Route path='/Cricket' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Cricket" />} />
                        <Route path='/World' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="World" />} />
                        <Route path='/Jokes' element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Jokes" />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}
