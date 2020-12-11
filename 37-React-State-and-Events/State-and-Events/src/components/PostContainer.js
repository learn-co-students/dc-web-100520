import React, { Component } from 'react'
import postData from '../data/postData'

//Components
import Post from './Post'

export default class PostContainer extends Component {
    render() {
        return (
            <div className="container row">
                {postData.map(postObj => <Post postInfo={postObj}/>)}
            </div>
        )
    }
}
