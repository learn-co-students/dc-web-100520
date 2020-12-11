import React, { Component } from 'react'
import postData from '../data/postData'

//Components
import Post from './Post'



export default class PostContainer extends Component {
    //Our Paintings
    //Filter our paintings
        //Whether the paintings title includes the
        //input value from state 

        
        render() {
            return (
                <div className="container row">
                    {postData.filter((painting) => painting.title.includes(this.props.inputText)).map(postObj => <Post postInfo={postObj}/>)}
                </div>
            )
    }
}
