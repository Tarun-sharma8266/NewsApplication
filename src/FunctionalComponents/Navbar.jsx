import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            search:"None"
        }
    }
    getSearch(e){
        this.setState({search:e.target.value})
    }
    postSearch(e){
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({search:""}  )
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg background sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text" to="#">NewsApp</Link>
                        <button className="navbar-toggler text-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list fs-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link active text" aria-current="page" to="/"  onClick={()=>this.props.changeSearch=("")}>All News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text" to="/Politics"  onClick={()=>this.props.changeSearch=("")}>Politics</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Language
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')}>English</button></li>
                                        <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>   
                                    </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Article Size
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item text" onClick={()=>this.props.changeSize(8)}>8</button></li>
                                        <li><button className="dropdown-item text" onClick={()=>this.props.changeSize(12)}>12</button></li>
                                        <li><button className="dropdown-item text" onClick={()=>this.props.changeSize(16)}>16</button></li>
                                        <li><button className="dropdown-item text" onClick={()=>this.props.changeSize(20)}>20</button></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"> 
                                    <Link className="nav-link dropdown-toggle text" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Other Category
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Technology">Technology</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Education">Education</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Covid-19">Covid-19</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/World">World</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Cricket">Cricket</Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/ICC-WCT20"></Link></li>
                                        <li><Link className="dropdown-item text"  onClick={()=>this.props.changeSearch=("")} to="/Jokes">Jokes</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                                <input className="form-control me-2" onChange={(e)=>this.getSearch(e)} type="search" name='search' placeholder="Search" aria-label="Search" />
                                <button className="btn-search " type="submit">Search</button>
                            </form>
                        </div> 
                    </div>
                </nav>
            </>
        )
    }
}
