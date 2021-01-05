import React, {Component} from 'react'
import paintingData from '../data/postData'
import { Route, Switch } from 'react-router-dom'

//Components
import About from './About'
import Navbar from './Navbar'
import PostContainer from './PostContainer'
import { Details }from './Details'
import Post from './Post'
import { NotFound } from './NotFound'

export default class App extends Component {

  state = {
    inputValue: ""
  }

  handleTextChange = inputValue => this.setState({ inputValue })

 



  render(){
    return (
        <div className="bg-dark">
          <Navbar
            handleTextChange={this.handleTextChange}
          />
          <div className="mt-4">
            <Switch>

            <Route path="/gallery/:id" render={(props) => {
              let paramsID = props.match.params.id
              console.log(paramsID);
              const paintingDeets = paintingData.find(painting => painting.id === paramsID)
              return paintingDeets ? <Details paintingInfo={paintingDeets}/> : <NotFound />
            }} />

            <Route path="/gallery" render={() => <PostContainer
              inputText={this.state.inputValue}
              paintingData={paintingData}
            />}/>

            <Route exact path="/" component={About}/>

            <Route component={NotFound} />

            </Switch>
          </div>
        </div>
    );

  }
}




