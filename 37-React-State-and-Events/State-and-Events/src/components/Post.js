import React from 'react'

//components
import Comment from './Comment'

export const Post = (props) => {
    console.log(props);
    return (
        <div className="col-4">
            <div className="card mb-3">
                    <img className="card-img-top" src={props.postInfo.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</p>
                        <ul class="list-group list-group-flush">
                            <Comment />
                            <Comment />
                            <Comment />
                        </ul>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
            </div>
        </div>
    )
}

export default Post 



