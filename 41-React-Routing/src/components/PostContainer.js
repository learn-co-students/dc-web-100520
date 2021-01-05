import React, { Component } from 'react'

//Components
import Post from './Post'



export default class PostContainer extends Component {

        
        render() {
            return (
                <div className="container-fluid row">
                    {this.props.paintingData.filter(
                        painting => painting.title.includes(this.props.inputText))
                        .map(
                            postObj => <Post postInfo={postObj}/>
                            )}
                </div>
            )
    }
}
