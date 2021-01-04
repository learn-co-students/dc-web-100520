import React, {Component} from 'react'

export default class Search extends Component {

    render(){
        return (
            <div className="input-group mb-3">
                <input onChange={(event) => this.props.handleTextChange(event.target.value)} type="text" className="form-control" placeholder="Search Text" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        )
    }
}
