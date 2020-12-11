import React, { Component } from 'react'


//Components
import Search from './Search'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-warning text-light ">
                <span className="navbar-brand mb-0 h1">A V Cool Brand</span>
                <Search
                    handleTextChange={this.props.handleTextChange} 
                />
            </nav>
        )
    }
}


