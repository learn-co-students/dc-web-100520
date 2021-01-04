import React, {Component} from 'react'

export default class Search extends Component {

    render(){
        return (
            <div className="form-inline">
                <label className="mr-2" for="searcher">Type a Name:</label>
                <input className="form-control" id="searcher" onChange={(event) => this.props.handleTextChange(event.target.value)} type="text" className="form-control" placeholder="Search Text" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        )
    }
}
