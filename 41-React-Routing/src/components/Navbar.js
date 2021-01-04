import React, { Component } from 'react'


//Components
import Search from './Search'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-info text-light ">
                <h3 className="navbar-brand">Paint-Bop</h3>
                <Search
                    handleTextChange={this.props.handleTextChange} 
                />
            </nav>
        )
    }
}


