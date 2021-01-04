import React, { Component } from 'react'
import postData from '../data/postData'

//Components
import Post from './Post'



export default class PostContainer extends Component {

        
        render() {
            return (
                <div className="container-fluid row">
                    {postData.filter(
                        painting => painting.title.includes(this.props.inputText))
                        .map(
                            postObj => <Post handleCurrentPainting={this.props.handleCurrentPainting} postInfo={postObj}/>
                            )}
                </div>
            )
    }
}
