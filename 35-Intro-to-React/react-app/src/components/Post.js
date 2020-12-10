import React, { Component } from 'react'

//components
import Comment from './Comment'
import {Form} from './Form'

export default class Post extends Component {
    render() {
        return (
            <div style={{ border: "solid" }}>
                This is a post Component
                <Comment />
                <Comment />
                <Form />
            </div>
        )
    }
}
