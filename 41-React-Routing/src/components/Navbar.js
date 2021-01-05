import React, { Component } from 'react'
import { Link } from 'react-router-dom'


//Components
import Search from './Search'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-info text-light ">
                <Link to="/"><h3 className="navbar-brand">Paint-Bop</h3></Link>
                <nav className="nav mr-auto">
                    <Link to="/gallery"><div class="nav-link text-light">Gallery</div></Link>
                </nav>
                <Search
                    handleTextChange={this.props.handleTextChange} 
                />
            </nav>
        )
    }
}


