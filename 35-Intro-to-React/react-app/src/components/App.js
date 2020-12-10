import React, { Component } from 'react'

//Components
import Navbar from './Navbar'
import Post from './Post'


export class App extends Component {

  render(){
    return(
      <div>
        <h1>
          YO RUBY DOOBY DOOOOO REACT
        </h1>
        <Navbar />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}






