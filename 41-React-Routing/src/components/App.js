import React, {Component} from 'react'
//Components
import Navbar from './Navbar'
import PostContainer from './PostContainer'

export default class App extends Component {

  state = {
    inputValue: ""
  }

  handleTextChange = inputValue => this.setState({inputValue})



  render(){
    return (
        <div className="bg-dark">
          <Navbar
            handleTextChange={this.handleTextChange}
          />
          <div className="mt-4">
            <PostContainer
              inputText={this.state.inputValue}
            />
          </div>
        </div>
    );

  }
}




