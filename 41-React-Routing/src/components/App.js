import React, {Component} from 'react'

//Components
import About from './About'
import Navbar from './Navbar'
import PostContainer from './PostContainer'
import { Details }from './Details'

export default class App extends Component {

  state = {
    inputValue: "",
    currentPainting: null
  }

  handleTextChange = inputValue => this.setState({ inputValue })

  handleCurrentPainting = currentPainting => this.setState({ currentPainting })



  render(){
    return (
        <div className="bg-dark">
          <Navbar
            handleTextChange={this.handleTextChange}
          />
          <div className="mt-4">
            {/* <About /> */}
            {this.state.currentPainting ? <Details paintingInfo={this.state.currentPainting} /> : null}
            <PostContainer
              inputText={this.state.inputValue}
              handleCurrentPainting={this.handleCurrentPainting}
            />
          </div>
        </div>
    );

  }
}




